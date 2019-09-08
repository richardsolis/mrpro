import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../../services/chat.service';
import { Chat } from '../../interface/chat.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento:any;
  currentChat: string;
  isDisabled: boolean;

  constructor(public _cs: ChatService, private _route:ActivatedRoute, private _router:Router) {

    this._route.params.subscribe(res => {
      const chatId = res.id;
      if (chatId) {
        this.currentChat = chatId;
        this._cs.cargarMensajes(chatId)
            .subscribe(()=>{
              setTimeout( ()=>{
                this.elemento.scrollTop = this.elemento.scrollHeight;
              },20);
            });
      }
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje(){
    console.log( this.mensaje );
    this.isDisabled = true;
    if( this.mensaje.length === 0 ){
      return;
    }
    this._cs.agregarMensajePrivado( this.mensaje, this.currentChat )
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
