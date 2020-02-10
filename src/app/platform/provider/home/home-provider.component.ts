import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { ChatService } from '../../../services/chat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/services/category.service';
import { DistrictService } from 'src/app/services/district.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.component.html',
  styleUrls: ['./home-provider.component.css']
})
export class HomeProviderComponent implements OnInit, OnDestroy {

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
  mesajeErrorService = '';
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(db: AngularFirestore, public _cs: ChatService, private _router:Router, private _route:ActivatedRoute,
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
                                                if(state.id !== 2 && state.id !== 3 && state.id !== 5)
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
      });;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0,'desc']],
      language: AppSettings.LANG_SPANISH
    };
    this._route.params.subscribe(res => {
      if(res.status){
        this.estado = res.status;
      }else{
        this.estado = "1";
      }
    })
    
    this.getRequests();
    this.registerForm = this.formBuilder.group({
      score:  [null, Validators.required],
      comment:  ['', Validators.required],
      user_client_id: ['', Validators.required]
    });
  
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  filterInit(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input').val('');
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
}

  rerender(){
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getRequests();
    });
  }

  getRequests(){
    this.budgetsList = [];
    this.spinner.show();
    this.userService.getBudget({ type: "provider", status: this.estado }).subscribe(
      response => {
        this.budgets = response;
        this.budgetsList.push(... this.budgets.data);
        this.dtTrigger.next();
        console.log(this.budgetsList);
        this.filterInit();
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

  checkoutCondition(accepted: string, date_service: string){
    let today = new Date();
    let serviceDate = new Date(date_service);
    let result = (today.getTime() > serviceDate.getTime())? true: false;
    if(accepted == '1' && result == true){
      return false;
    }else if(accepted == '1' && result == false){
      return true;
    }else  if(accepted == '0'){
      return true;
    }
  }

  confirm(cmodal, option: string, budgetID: string){
    console.log(cmodal,option,budgetID)
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

  changeStatus(cmodal, option: string, budgetID: string){
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
            if (cmodal == 'lifeHack') {
              this._router.navigate(['/proveedor/chat',chat.id, budgetID]);
            }
            console.log("ActualizaChatBudget",res);
            this.spinner.hide();
            cmodal.close();
            this.rerender();
            //location.reload();
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
          //location.reload();
        }, (error: any) => {
          console.log(error);
        });
    }

  }

  startChat(chatId: string, BudgetID: string){
    if (chatId == null) {
      this.changeStatus('lifeHack', 'A', BudgetID);
    }else {
    this.chatID = chatId;
    this._router.navigate(['/proveedor/chat',chatId, BudgetID]);
    }
    
  }

  closeService(modal,clientID: string ,BudgetID: string){
    this.registerForm.setValue({score: '0',comment:'',user_client_id:''});
      this.registerForm.get('user_client_id').setValue(clientID);
      this.BUDGET_ID = BudgetID;
      modal.open();
  }

  Rating(){
    if (this.registerForm.invalid) {
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
                this.mesajeErrorService = error.error.message;
                setTimeout(() => {
                  this.mesajeErrorService = '';
                }, 2000);
                this.spinner.hide();
              });
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
  }

}
