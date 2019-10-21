import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {  Mensaje } from '../platform/provider/interface/mensaje.interface';
import { Chat } from '../platform/provider/interface/chat.interface';
import { map, switchMap } from 'rxjs/operators';
import { SessionService } from './session.service';
import { firestore } from 'firebase';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Chat>;
  public mensajes: Mensaje[];
  public currentChat: Chat;

  constructor(private afs: AngularFirestore, private userService: UserService) {
  
  }

  //crear el chat 1vs1 cuando se acepta el pedido
  crearChat(title: string){
    this.itemsCollection = this.afs.collection<Chat>('chats');
    const id = this.afs.createId();
    let newchat: Chat = {
      id,
      titulo: title,
      fecha: new Date().getTime(),
      mensajes: []
    }

    this.itemsCollection.doc(id).set( newchat )
                                        .then( ()=>{
                                          this.currentChat = newchat; 
                                          console.log("crearChat",this.currentChat);
                                        })
                                        .catch( (err)=>console.error('Error al enviar',  err ) );
    return newchat;                                    
                                        
  }

  //Trae el chat creado 1vs1 a traves del id del chat
  cargarChat(chatID: string){
    this.itemsCollection = this.afs.collection<Chat>('chats', ref => ref.where('id', '==', chatID));

    return this.itemsCollection.valueChanges().pipe(
                                                map((chat: Chat[])=>{
                                                  this.currentChat = chat[0];
                                                  console.log("cargarChat", this.currentChat);
                                                  return this.currentChat;
                                                })
    );

  }

  //Trae los mensajes de un chat especifico
  cargarMensajes(chatID: string){
    this.itemsCollection = this.afs.collection<Chat>('chats', ref => ref.where('id', '==', chatID));
    
    return this.itemsCollection.valueChanges().pipe(
                            map((chat: Chat[])=> {
                              let temp: Mensaje[] = chat[0].mensajes;
                              console.log(chat[0]);
                              if(temp){
                                temp = temp.sort((a,b)=> b.fecha-a.fecha );
                                this.mensajes = [];
                                for ( let mensaje of temp ){
                                  this.mensajes.unshift( mensaje );
                                  this.mensajes.map(msj => {
                                    if(msj.tipo == '2'){
                                      msj.image = this.userService.convertImage(msj.mensaje);
                                    }
                                      return msj;
                                  });
                                }
                              }else{
                                this.mensajes = [];
                              }
                              return this.mensajes;

                            })
    );
  }

  //agrega un mensaje a un chat especifico
  agregarMensajePrivado( texto: string,img: string, tipoMensaje: string, chatID: string, userID: number, userName: string ){

    let mensajeTemp: Mensaje = {
      nombre:  userName,
      mensaje: texto,
      tipo: tipoMensaje,
      fecha: new Date().getTime(),
      uid: userID
    }
    console.log("currentchat", chatID);
    const ref = this.afs.collection<any>('chats').doc<any>(chatID);
    return ref.update({
      mensajes: firestore.FieldValue.arrayUnion(mensajeTemp)
    });

  }

}
