import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { AppSettings } from 'src/app/app.settings';
import { CategoryService } from 'src/app/services/category.service';
import { SessionService } from 'src/app/services/session.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  public pathImage: string = AppSettings.BASE_PATH_IMAGE;
  imageChat:any;
  elemento:any;
  currentChat: string;
  currentBudgetID: string;
  isDisabled: boolean;
  currentBudget: any = {};
  hour: string;
  categories: any[];
  user: any = {};

  constructor(public _cs: ChatService, private _route:ActivatedRoute, 
              private spinner: NgxSpinnerService, private _router:Router,
              private userService: UserService, private categoryService: CategoryService,
              private session: SessionService) {

    this._route.params.subscribe(res => {
      this.user = this.session.getObject("user");
      console.log("user",this.user);
      if (res.id) {
        this.currentChat = res.id;
        this.currentBudgetID = res.BudgetId;
        this.spinner.show();

        this._cs.cargarMensajes( this.currentChat)
            .subscribe(()=>{
              setTimeout( ()=>{
                this.elemento.scrollTop = this.elemento.scrollHeight;
                this.spinner.hide();
              },20);
            });

        this.userService.getOneBudget(this.currentBudgetID)
          .subscribe((res: any)=>{
            console.log("budget info: ", res);
            this.hour = res.data.date_service.split(" ")[1];
            res.data.date_service = res.data.date_service.split(" ")[0];
            this.currentBudget = res.data;
          });
        
        this.categoryService.guestGetCategories()
          .subscribe((response: any) => {
            this.categories = response.data;
          }, (error: any) => {
            console.log(error);
          });
      }
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  getName(array: any[], value){
    let temp = "";
    for (var i = 0; i < array.length; i++) {
      if(array[i].id == value){
        temp = array[i].name;
        break;
      }
    }
    return temp;
  }

  updateInfo(){
    const specificDate = `${this.currentBudget.date_service} ${this.hour}`;
    this.spinner.show();
    this.userService.updateBudgetInfo(this.currentBudget, specificDate)
  	.subscribe((response: any) => {
      console.log("updateInfo",response);
  		this.spinner.hide();
  	}, (error: any) => {
      console.log(error);
      this.spinner.hide();
	  })
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
      this._cs.agregarMensajePrivado(response.data, '2', this.currentChat, this.user.id, this.user.name )
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
    this._cs.agregarMensajePrivado( this.mensaje, tipo, this.currentChat, this.user.id, this.user.name )
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

  goback(path: string){
    this._router.navigate([path]);
  }

}
