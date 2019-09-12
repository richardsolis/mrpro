import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { AppSettings } from 'src/app/app.settings';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  public pathImage: string = AppSettings.BASE_IMAGE;
  imageChat:any;
  elemento:any;
  currentChat: string;
  isDisabled: boolean;

  constructor(public _cs: ChatService, private _route:ActivatedRoute, 
              private spinner: NgxSpinnerService, private _router:Router,
              private userService: UserService) {

    this._route.params.subscribe(res => {
      
      if (res.id) {
        this.currentChat = res.id;
        this.spinner.show();
        this._cs.cargarMensajes( this.currentChat)
            .subscribe(()=>{
              setTimeout( ()=>{
                this.elemento.scrollTop = this.elemento.scrollHeight;
                this.spinner.hide();
              },20);

            });
      }
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  selectFile(event){
    console.log(event.target.name);
  
    if (!event) {
      this.imageChat = null;
      return;
    }

    if(event.target.files[0].type.indexOf('image') < 0) {
      this.imageChat = null;
      return;
    }

      this.imageChat = event.target.files[0];
      this.uploadFile(this.imageChat);
  }

  uploadFile(file){
    this.spinner.show();
    this.userService.postSaveImageUser(file)
  	.subscribe((response: any) => {
      this.isDisabled = true;
      console.log(response); 
      this._cs.agregarMensajePrivado(response.data, '2', this.currentChat )
              .then( ()=>{
                this.isDisabled = false;
              })
              .catch( (err)=> {
                this.isDisabled = false;
                console.error('Error al enviar imagen mensaje',  err );
              });
  		this.spinner.hide();
  	}, (error: any) => {
  		console.log(error);
	  })
  }

  enviar_mensaje(tipo:string){
    console.log( this.mensaje );
    this.isDisabled = true;
    if( this.mensaje.length === 0 ){
      return;
    }
    this._cs.agregarMensajePrivado( this.mensaje, tipo, this.currentChat )
              .then( ()=>{
                this.mensaje="";
                this.isDisabled = false;
              })
              .catch( (err)=> {
                this.isDisabled = false;
                console.error('Error al enviar',  err );
              });
  }

  startChat(chatId: string){
    this.currentChat = chatId;
    //this._cs.crearChat(title);
    //this._cs.cargarChat(chatId).subscribe();
  }

  goback(){
    this._router.navigate(['/proveedor/home']);
  }

}
