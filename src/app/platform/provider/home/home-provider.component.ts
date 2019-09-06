import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from '../../../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.component.html',
  styleUrls: ['./home-provider.component.css']
})
export class HomeProviderComponent implements OnInit {

  public items: Observable<any[]>;
  public chatID: string;

  constructor(db: AngularFirestore, public _cs: ChatService, private _router:Router) {
    this.items = db.collection('chats').valueChanges();
    this.chatID = "";
  }
  ngOnInit() {
  }

  startChat(chatId: string){
    //this._cs.crearChat(chatId);
    this.chatID = chatId;
    //this._cs.cargarChat(chatId).subscribe();
    this._router.navigate(['/proveedor/chat',chatId]);
    
  }

}
