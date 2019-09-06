import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {  Mensaje } from '../platform/provider/interface/mensaje.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from './session.service';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;
  private chatPrivado: AngularFirestoreDocument<any>;

  public chats: any[];
  public currentUser: any = {};

  constructor(private afs: AngularFirestore, private sessionService: SessionService) {
    this.currentUser = JSON.parse(this.sessionService.getItem('user'));
    console.log(this.currentUser);
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<any>('chats', ref => ref.orderBy('fecha','desc')
                                                                            .limit(6));
    return this.itemsCollection.valueChanges().pipe(
                                map( (mensajes: any[]) =>{
                                  console.log( mensajes );

                                  this.chats = [];

                                  for ( let mensaje of mensajes ){
                                    this.chats.unshift( mensaje );
                                  }

                                  return this.chats;
                                })
    );

  }

  cargarMensajesPrivado(chatId: string){
    this.chatPrivado = this.afs.collection<any>('chats').doc<any>(chatId);
    return this.chatPrivado.valueChanges().pipe(
                            map((doc)=> {
                              let temp: any[] = doc.mensaje;
                              console.log(temp.sort((a,b)=> b.fecha-a.fecha ));
                              temp = temp.sort((a,b)=> b.fecha-a.fecha );
                              this.chats = [];
                              for ( let mensaje of temp ){
                                this.chats.unshift( mensaje );
                              }
                              return this.chats;
                            })
    );
  }
  agregarMensajePrivado( texto: string ){

    // TODO falta el UID del usuario
    let mensajeTemp: Mensaje = {
      nombre:  this.currentUser.name,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.currentUser.id
    }

    const ref = this.afs.collection<any>('chats').doc<any>('SGBFlRdRfvFpaESOsWV5');
    return ref.update({
      mensaje: firestore.FieldValue.arrayUnion(mensajeTemp)
    });

  }

  agregarMensaje( texto: string ){

    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre:  this.currentUser.name,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.currentUser.id
    }

    return this.itemsCollection.add( mensaje );

  }

  crearChat(title: string){
    let chat: any = {
      titulo: title,
      fecha: new Date().getTime(),
      mensaje: []
    }

    return this.itemsCollection.add( chat );
  }

}
