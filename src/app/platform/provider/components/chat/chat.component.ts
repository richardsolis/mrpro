import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../../services/chat.service';
import { Chat } from '../../interface/chat.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento:any;
  currentChat: string;

  constructor(public _cs: ChatService, private _route:ActivatedRoute) {
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

    if( this.mensaje.length === 0 ){
      return;
    }

    this._cs.agregarMensajePrivado( this.mensaje, this.currentChat )
              .then( ()=> this.mensaje=""  )
              .catch( (err)=>console.error('Error al enviar',  err ) );
  }

  startChat(chatId: string){
    this.currentChat = chatId;
    //this._cs.crearChat(title);
    //this._cs.cargarChat(chatId).subscribe();
  }

}
