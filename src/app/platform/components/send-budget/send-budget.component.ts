import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { DistrictService } from "../../../services/district.service";
import { GeneralService } from "../../../services/general.service";
import { NgxSpinnerService } from "ngx-spinner";
import localeDe from "@angular/common/locales/de";

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
  nFlag: boolean = false;
  dFlag: boolean = false;
  cvvFlag: boolean = false;
  tomorrow = new Date();
  budget: any = {
    provider: "",
    user_provider_id: 0,
    contact_name: "",
    phone_name: "",
    address: "",
    district_id: 9,
    category_service_id: 0,
    description: "",
    date_service: "",
    date: "",
    hour: "08:00:00"
  };
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

  currentday = this.session.getObject("budget").date.split('T')[0];
  ObjectServi = {
    address: "",
    category_service_id: this.session.getObject("budget").category,
    contact_name: this.session.getObject("user").name + " " + this.session.getObject("user").lastname,
    date_service: new Date(),
    hour: this.session.getObject("budget").hour,
    description: "",
    district_id: "1",
    phone_name: this.session.getObject("user").phone,
    user_provider_id: ""
  };
  y = this.ObjectServi.date_service.getFullYear();
  //Mes
  m = this.ObjectServi.date_service.getMonth() + 1;
  //Día
  d = this.ObjectServi.date_service.getDate();
  selectedImage;
  pago = false;
  file: File;
  imgaa: FileList;
  listCard;
  constructor(private router: Router, private session: SessionService, private districtS: DistrictService, private userS: UserService, private generalS: GeneralService, private spinner: NgxSpinnerService) 
  {
    let array = this.currentday.split('-');
    this.ObjectServi.date_service = new Date(array[0],array[1],array[2]);
  }

  ngOnInit() {
    // [{ user_provider_id: "1", contact_name: "Raquel", phone_name: "Rosas", address: "Av juan 23", district_id: "3", category_service_id: "2", description: "Es una rotura pequeña help!!", date_service: "2019-08-05 13:00:00" }, { user_provider_id: "1", contact_name: "Raquel", phone_name: "Rosas", address: "Av juan 23", district_id: "3", category_service_id: "2", description: "Es una rotura pequeña help!!", date_service: "2019-08-05 13:00:00" }];
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.ObjectServi.date_service = this.tomorrow;
    let budget = this.session.getObject("budget");
    this.providers = this.session.getObject("providers");
    this.budget.provider = "Proveedor: " + budget.provider_name;
    this.budget.user_provider_id = budget.provider;
    this.budget.category_service_id = budget.category;
    this.budget.date = budget.date;
    this.budget.hour = budget.hour;
    console.log(budget, "dasdadasdasdasd");
    this.getDistricts();
    this.allCard();
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
      console.log(this.listCard);
    });
  }

  addMetodButon() {
    console.log("hola");
    this.addMetod = true;
  }

  onSelectImage(event, number) {
    if (number === 1) {
      this.image1 = event.target.files[0];
      this.userS.postSaveImageUser(event.target.files[0]).subscribe((response: any) => {
        this.image1 = response.data;
        console.log(response);
      });
    }
    if (number === 2) {
      this.image2 = event.target.files[0];
      this.userS.postSaveImageUser(event.target.files[0]).subscribe((response: any) => {
        this.image2 = response.data;
        console.log(response);
      });
    }
    if (number === 3) {
      this.userS.postSaveImageUser(event.target.files[0]).subscribe((response: any) => {
        this.image3 = response.data;
      });
    }
  }

  saveCard() {
    if(this.cardCreit.number.length != 16){
      this.nFlag = true;
      return;
    }else{
      this.nFlag = false;
    }

    if(!this.dateExpiration(this.cardCreit.date)){
      this.dFlag = true;
      return;
    }else{
      this.dFlag = false;
    }

    if(this.cardCreit.cvv.length != 3){
      this.cvvFlag = true;
      return;
    }else{
      this.cvvFlag = false;
    }

    this.userS.createCardBank(this.cardCreit).subscribe((response: any) => {
      console.log(response);
      this.allCard();
      this.addMetod = false;
      this.cardCreit = {
        number: "",
        date: "",
        cvv: ""
      };
    });
  }

  deleteCard(cardID: string){
      this.userS.deleteCardBank(cardID).subscribe((response: any) => {
        console.log(response);
        this.listCard = [];
        this.allCard();
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

  sendBudget() {
    // this.sendBudget(true);
    this.pago = true;
  }

  sendData(modal) {
    this.pago = false;
    this.spinner.show();
    this.sbutton = true;
    this.messageT = true;
    this.services = [];
    var dataSend = [];
    // this.ObjectServi.date_service = this.d + "-" + this.m + "-" + this.y + " " + this.hour;
    for (let i = 0; i < this.LocalProvider.length; i++) {
      dataSend.push({
        address: this.ObjectServi.address,
        category_service_id: this.session.getObject("budget").category,
        parent_category_service: 4,
        contact_name: this.session.getObject("user").name + " " + this.session.getObject("user").lastname,
        date_service: this.ObjectServi.date_service,
        description: this.ObjectServi.description,
        district_id: this.ObjectServi.district_id,
        phone_name: this.session.getObject("user").phone,
        user_provider_id: this.LocalProvider[i].id
      });
    }
    this.userS.sendBudget({ services: JSON.stringify(dataSend), image: [this.image1, this.image2, this.image3] }).subscribe(
      response => {
        this.message = "Se agendó un servicio";
        modal.open();
        this.spinner.hide();
      },
      error => {
        // this.generalS.relogin(this.sendBudget, error, this.spinner);
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

  goback() {
    this.router.navigate(["/reserva"]);
  }
}
