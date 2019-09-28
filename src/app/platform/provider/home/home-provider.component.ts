import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from '../../../services/chat.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { DistrictService } from 'src/app/services/district.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.component.html',
  styleUrls: ['./home-provider.component.css']
})
export class HomeProviderComponent implements OnInit {

  public items: Observable<any[]>;
  public chatID: string;

  public budgets: any;
  public budgetsList: any[];
  estado:string;
  districts: any[];
  categories: any[];
  statusList: any[];

  registerForm: FormGroup;
  BUDGET_ID: string;
  validFlag: boolean = false;

  confirmModel: any;

  constructor(db: AngularFirestore, public _cs: ChatService, private _router:Router, 
              private userService: UserService, private spinner: NgxSpinnerService,
              private categoryService: CategoryService, private districtService: DistrictService,private formBuilder: FormBuilder) {
    this.items = db.collection('chats').valueChanges();
    this.chatID = "";
    this.confirmModel = {
      mensaje: "",
      option: "",
      budgetID: ""
    };
    this.userService.getStatus()
      .subscribe((response: any) => {
        this.statusList = response.data.filter(state => { 
                                                if(state.id !== 2 && state.id !== 3)
                                                  return state; 
                                              });
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
    this.estado = "1";
    this.getRequests();
    this.registerForm = this.formBuilder.group({
      score:  ['0', Validators.required],
      comment:  ['', Validators.required],
      user_client_id: ['', Validators.required]
    });
  
  }

  getRequests(){
    this.budgetsList = [];
    this.spinner.show();
    this.userService.getBudget({ type: "provider", status: this.estado }).subscribe(
      response => {
        this.budgets = response;
        this.budgetsList.push(... this.budgets.data);
        console.log(this.budgetsList);
        this.spinner.hide();
      },
      error => console.log(error)
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

  confirm(cmodal, option: string, budgetID: string){
    cmodal.open();
    if(option == 'A'){
      this.confirmModel.mensaje = "¿Está seguro de Aceptar el servicio? Ingrese al chat para definir el precio, la fecha y hora del servicio.";
      this.confirmModel.option = option;
      this.confirmModel.BudgetID = budgetID;
    }else if(option == 'R'){
      this.confirmModel.mensaje = "¿Está seguro de Rechazar el servicio? No volverá a verlo en su listado.";
      this.confirmModel.option = option;
      this.confirmModel.BudgetID = budgetID;
    }
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
    }

  }

  startChat(chatId: string, BudgetID: string){
    this.chatID = chatId;
    this._router.navigate(['/proveedor/chat',chatId, BudgetID]);
    
  }

  closeService(modal,clientID: string ,BudgetID: string){
    this.registerForm.setValue({score: '0',comment:'',user_client_id:''});
      this.registerForm.get('user_client_id').setValue(clientID);
      this.BUDGET_ID = BudgetID;
      modal.open();
  }

  Rating(){
    if (this.registerForm.invalid || this.registerForm.get('score').value === '0') {
      this.validFlag = true;
      return;
    }
    console.log(this.registerForm.value);
    this.validFlag = false;
    this.spinner.show();
    this.userService.scoreOfProvider(this.registerForm.value)
        .subscribe((res: any) => {
          console.log(res);
          this.userService.updateStatus('6',this.BUDGET_ID)
              .subscribe((res: any) => {
                console.log(res);
                this.spinner.hide();
                location.reload();
              }, (error: any) => {
                console.log(error);
                this.spinner.hide();
              });
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
  }

}
