import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { DistrictService } from "../../../services/district.service";
import { GeneralService } from "../../../services/general.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServiceService } from '../../../services/service.service';
import { CreditCardValidator } from 'angular-cc-library';

@Component({
  selector: "app-send-budget",
  templateUrl: "./send-budget.component.html",
  styleUrls: ["./send-budget.component.css"]
})
export class SendBudgetComponent implements OnInit {
  cardCreit = {
    number: "",
    date: "",
    cvv: ""
  };

  cardBankID: any;
  nFlag: boolean = false;
  dFlag: boolean = false;
  cvvFlag: boolean = false;
  modalAlert = false;
  providers = [];
  services = [];
  LocalProvider = this.session.getObject("provider");

  message = "";
  messageT = true;
  sbutton = true;
  districts = [];
  date = new Date();
  hour = null;
  addMetod = false;
  typeServices = this.session.getObject("budget");
  image1 = "";
  image2 = "";
  image3 = "";
  imgArray:string [] = [];
  mesajeErrorCard = false;
  registerForm: FormGroup;

  selectedImage;
  pago = false;
  file: File;
  imgaa: FileList;
  listCard;
  form1: FormGroup;

  flagTypePay: boolean = true;
  constructor(public ServiceService:ServiceService ,private router: Router, private session: SessionService, private districtS: DistrictService, 
              private userS: UserService, private generalS: GeneralService, private spinner: NgxSpinnerService,
              private formBuilder: FormBuilder, private _fb: FormBuilder) 
  {
    this.cardBankID = null;
  }

  ngOnInit() {
    this.form1 = this._fb.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]] 
    });
    this.registerForm = this.formBuilder.group({
      address: ['', Validators.required],
      category_service_id: [this.session.getObject("budget").category, Validators.required],
      contact_name: [this.session.getObject("user").name + " " + this.session.getObject("user").lastname, Validators.required],
      date_service:  [this.session.getObject("budget").date, Validators.required],
      hour:  [this.session.getObject("budget").hour, Validators.required],
      description:  ['', Validators.required],
      district_id: ['1', Validators.required],
      phone_name: this.session.getObject("user").phone,
      user_provider_id: ['']
    });

    if(!this.registerForm.get('date_service').value){
      this.registerForm.get('date_service').setValue(this.getActualDate());
    }

    if(!this.registerForm.get('hour').value){
      this.registerForm.get('hour').setValue('08:00:00');
    }

    this.providers = this.session.getObject("providers");
    console.log(this.providers);
    this.getDistricts();
    this.allCard();

  }
  setCardCredite(id){
    console.log(id)
    this.cardBankID = id;
    this.flagTypePay = false;
    this.ServiceService.setCardCredit(id).subscribe((response: any) => {
      console.log(response);
      this.listCard = [];
      this.allCard();
    });
    
  }
  getTotalPrice(price: string, quantity:string){
    const priceN = parseInt(price);
    const quantityN = parseInt(quantity);
    return priceN*quantityN;
  }

  getActualDate(){
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = ("0" + (tomorrow.getDate())).slice(-2);
    const month = ("0" + (tomorrow.getMonth() + 1)).slice(-2);
    const year = tomorrow.getFullYear();
    return `${year}-${month}-${day}`;
  }

  validateDate(){
    const tmp = this.registerForm.get('date_service').value;
    if(tmp){
      const currentYear: any[] = tmp.split('-');
      const today = new Date(this.getActualDate());
      const anyDay = new Date(this.registerForm.get('date_service').value);

      if(tmp.split('-')[0].length > 4){
        this.registerForm.get('date_service').setValue(this.getActualDate());
      }else if(today.getTime() > anyDay.getTime()){
        this.registerForm.get('date_service').setValue(this.getActualDate());
      }
    }else{
      this.registerForm.get('date_service').setValue(this.getActualDate());
    }
    
  }

  getDistricts() {
    this.spinner.show();
    this.districtS.guestGetDistricts().subscribe((response: any) => {
      this.districts = response.data;
      this.spinner.hide();
    });
  }

  allCard() {
    this.userS.getCardBank().subscribe((response: any) => {
      this.listCard = response.data;
      for (let i = 0; i < this.listCard.length; i++) {
        if (this.listCard[i].default == 1) {
          this.cardBankID = this.listCard[i].id
        }
      }
      console.log(this.listCard,this.cardBankID,"ELmaki");
    });
  }

  addMetodButon() {
    console.log("hola");
    this.addMetod = true;
  }

  onSelectImage(event, number) {
    if (number == 1) {
      this.image1 = event.target.files[0];
      this.userS.postSaveImageUser(event.target.files[0]).subscribe((response: any) => {
        this.image1 = response.data;
        this.imgArray.push(this.image1);
        console.log(response);
      });
    }
    if (number == 2) {
      this.image2 = event.target.files[0];
      this.userS.postSaveImageUser(event.target.files[0]).subscribe((response: any) => {
        this.image2 = response.data;
        this.imgArray.push(this.image2);
        console.log(response);
      });
    }
    if (number == 3) {
      this.userS.postSaveImageUser(event.target.files[0]).subscribe((response: any) => {
        this.image3 = response.data;
        this.imgArray.push(this.image3);
      });
    }
  }

  saveCard() {
    this.cardCreit = {
      number: this.form1.value.creditCard.replace(/\s/g,''),
      date: this.form1.value.expirationDate.split(' ').join(''),
      cvv: this.form1.value.cvc
    };


    if (this.form1.valid) {
      this.nFlag =false;
      this.userS.createCardBank(this.cardCreit).subscribe((response: any) => {
        console.log(response);
        this.allCard();
        this.addMetod = false;
        this.form1.reset();
        this.cardCreit = {
          number: "",
          date: "",
          cvv: ""
        };
      });
    }
    else {
      this.nFlag =true;
    }
  }

  deleteCard(cardID: string){
      this.userS.deleteCardBank(cardID).subscribe((response: any) => {
        console.log(response);
        this.listCard = [];
        this.allCard();
      }, error => {
        this.mesajeErrorCard = true;
        setTimeout( ()=>{
          this.mesajeErrorCard = false;
        },5000);
      });

  }

  dateExpiration(reg){
    const regExp    = new RegExp(/^\d{1,2}\/\d{1,2}$/);
    return regExp.test( reg );
  }

  editCard(list) {
    this.addMetod = true;
    this.cardCreit = {
      number: null,
      date: list.date,
      cvv: list.cvv
    };
    console.log(list);
  }

  cancelCard() {
    this.addMetod = false;
  }

  cancelSend() {
    this.pago = false;
  }

  selectCardBank(bankID: any){
    this.cardBankID = bankID;
    this.flagTypePay = false;
  }


  changePay(){
    for (var i = 0; i < this.listCard.length; i++) {
      this.listCard[i].default = 0;
    }
    this.cardBankID = null
    this.flagTypePay = true;
  }

  sendBudget(modal) {
    console.log('sendBudget');
    if (this.registerForm.invalid) {
      this.sbutton = false;
      this.messageT = false;
      this.message = "Complete los campos obligatorios(*)";
      modal.open();
      return;
    }
    this.pago = true;
  }

  sendData(modal) {
    this.pago = false;
    this.spinner.show();
    this.sbutton = true;
    this.messageT = true;
    this.services = [];
    var dataSend = [];
    let notification = [];
    let title = '';
    for (let i = 0; i < this.LocalProvider.length; i++) {
      if(this.session.getObject("budget").quantity === undefined){
        if (this.session.getObject("budget").type == "priced") {
          dataSend.push({
            address: this.registerForm.get('address').value,
            service_priced_id: this.session.getObject("budget").category,
            parent_service_priced: this.session.getObject("budget").subcategory,
            contact_name: this.registerForm.get('contact_name').value,
            date_service: `${this.registerForm.get('date_service').value} ${this.registerForm.get('hour').value}`,
            description: this.registerForm.get('description').value,
            district_id: this.registerForm.get('district_id').value,
            phone_name: this.registerForm.get('phone_name').value,
            card_bank_id: this.cardBankID,
            user_provider_id: this.LocalProvider[i].id
          });
        } else {
          dataSend.push({
            address: this.registerForm.get('address').value,
            category_service_id: this.session.getObject("budget").category,
            parent_category_service: this.session.getObject("budget").subcategory,
            contact_name: this.registerForm.get('contact_name').value,
            date_service: `${this.registerForm.get('date_service').value} ${this.registerForm.get('hour').value}`,
            description: this.registerForm.get('description').value,
            district_id: this.registerForm.get('district_id').value,
            phone_name: this.registerForm.get('phone_name').value,
            card_bank_id: this.cardBankID,
            user_provider_id: this.LocalProvider[i].id
          });
        }
        
        notification.push(this.LocalProvider[i].user.id);
        title = 'Nueva Solicitud Cotizacion';
      }else{
        if (this.session.getObject("budget").type == "priced") {
          dataSend.push({
            address: this.registerForm.get('address').value,
            service_priced_id: this.session.getObject("budget").category,
            parent_service_priced: this.session.getObject("budget").subcategory,
            contact_name: this.registerForm.get('contact_name').value,
            date_service: `${this.registerForm.get('date_service').value} ${this.registerForm.get('hour').value}`,
            description: this.registerForm.get('description').value,
            district_id: this.registerForm.get('district_id').value,
            phone_name: this.registerForm.get('phone_name').value,
            card_bank_id: this.cardBankID,
            user_provider_id: this.LocalProvider[i].id,
            price: this.getTotalPrice(this.session.getObject("budget").price,this.session.getObject("budget").quantity),
            quantity: this.session.getObject("budget").quantity
          });
          notification.push(this.LocalProvider[i].user.id);
          title = 'Nueva Solicitud Tarifado';
        } else {
          dataSend.push({
            address: this.registerForm.get('address').value,
            category_service_id: this.session.getObject("budget").category,
            parent_category_service: this.session.getObject("budget").subcategory,
            contact_name: this.registerForm.get('contact_name').value,
            date_service: `${this.registerForm.get('date_service').value} ${this.registerForm.get('hour').value}`,
            description: this.registerForm.get('description').value,
            district_id: this.registerForm.get('district_id').value,
            phone_name: this.registerForm.get('phone_name').value,
            card_bank_id: this.cardBankID,
            user_provider_id: this.LocalProvider[i].id,
            price: this.getTotalPrice(this.session.getObject("budget").price,this.session.getObject("budget").quantity),
            quantity: this.session.getObject("budget").quantity
          });
          notification.push(this.LocalProvider[i].user.id);
          title = 'Nueva Solicitud Tarifado';
        }
      }
    }
    this.userS.sendBudget({ services: JSON.stringify(dataSend), image: JSON.stringify(this.imgArray) }).subscribe(
      response => {
        this.userS.sendNotification({ 
          user_id: JSON.stringify(notification), title: title, 
          message: this.registerForm.get('description').value }).subscribe(res =>{
          console.log(response);
          console.log(res);
          this.message = "Se generó su solicitud";
          modal.open();
          this.spinner.hide();
        },
        error => {
          console.log(error);
        this.spinner.hide();
        });

      },
      error => {
        console.log(error);
        this.spinner.hide();
      }
    );
  }

  onlydigit(e) {
    var tecla;
    var patron;
    var tecla_final;
    tecla = document.all ? e.keyCode : e.which;
    if (tecla == 8) {
      return true;
    }
    patron = /[0-9.]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
  }

  goReserved() {
    this.router.navigate(["/reservado"]);
  }

  goback(number) {
    if (number == 0) {
      this.modalAlert = true;
    }else {
      this.modalAlert = false;
    }
  }

  gobackYes(){
    this.router.navigate(["/reserva"]);
  }
}
