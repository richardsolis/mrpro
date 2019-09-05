import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {  Mensaje } from '../platform/provider/interface/mensaje.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[];
  public currentUser: any = {};

  constructor(private afs: AngularFirestore, private sessionService: SessionService) {
    this.currentUser = JSON.parse(this.sessionService.getItem('user'));
    console.log(this.currentUser);
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc')
                                                                            .limit(6));
    return this.itemsCollection.valueChanges().pipe(
                                map( (mensajes: Mensaje[]) =>{
                                  console.log( mensajes );

                                  this.chats = [];

                                  for ( let mensaje of mensajes ){
                                    this.chats.unshift( mensaje );
                                  }

                                  return this.chats;
                                })
    );

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
