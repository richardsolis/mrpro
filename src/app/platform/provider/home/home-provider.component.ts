import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from '../../../services/chat.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { DistrictService } from 'src/app/services/district.service';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.component.html',
  styleUrls: ['./home-provider.component.css']
})
export class HomeProviderComponent implements OnInit {

  public items: Observable<any[]>;
  public chatID: string;

  public budgetsList: any[] = [];
  districts: any[];
  categories: any[];
  statusList: any[];

  constructor(db: AngularFirestore, public _cs: ChatService, private _router:Router, 
              private userService: UserService, private spinner: NgxSpinnerService,
              private categoryService: CategoryService, private districtService: DistrictService) {
    this.items = db.collection('chats').valueChanges();
    this.chatID = "";

    this.userService.getStatus()
      .subscribe((response: any) => {
        this.statusList = response.data;
      }, (error: any) => {
        console.log(error);
      });

    this.districtService.guestGetDistricts()
      .subscribe((response: any) => {
        this.districts = response.data;
      }, (error: any) => {
        console.log(error);
      });

    this.categoryService.guestGetCategories()
      .subscribe((response: any) => {
        this.categories = response.data;
      }, (error: any) => {
        console.log(error);
      });
   
  }

  ngOnInit() {
    this.spinner.show();
    this.userService.getBudget({ type: "provider" }).subscribe(
      (response:any) => {
        console.log(response);
        this.budgetsList = response.data;
        this.spinner.hide();
      },
      error => {
        // this.generalS.relogin(this.sendBudget, error, this.spinner);
      }
    );
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

  changeStatus(option: string, budgetID: string){
    const chatTitle = `Chat-${budgetID}`;
    this.spinner.show();
    if(option == 'A'){
      this.userService.updateStatus('4', budgetID)
        .subscribe((res: any) => {
          console.log("ActualizaEstado",res);
          const chat = this._cs.crearChat(chatTitle);
          console.log("ChatCreado",chat.id);
          this.userService.updateBudgetChat(chat.id, budgetID)
          .subscribe((res: any) => {
            console.log("ActualizaChatBudget",res);
            this.spinner.hide();
            location.reload();
          },(error: any) => {
            console.log(error);
            this.spinner.hide();
          });
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
    }else if(option == 'R'){
      this.userService.updateStatus('3',budgetID)
        .subscribe((res: any) => {
          console.log(res);
          this.spinner.hide();
          location.reload();
        }, (error: any) => {
          console.log(error);
        });
    }else if(option == 'F'){
      this.userService.updateStatus('6',budgetID)
        .subscribe((res: any) => {
          console.log(res);
          this.spinner.hide();
          location.reload();
        }, (error: any) => {
          console.log(error);
        });
    }

  }

  startChat(chatId: string, BudgetID: string){
    //this._cs.crearChat(chatId);
    this.chatID = chatId;
    //this._cs.cargarChat(chatId).subscribe();
    this._router.navigate(['/proveedor/chat',chatId, BudgetID]);
    
  }

}
