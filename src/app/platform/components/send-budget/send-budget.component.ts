import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { DistrictService } from "../../../services/district.service";
import { GeneralService } from "../../../services/general.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-send-budget",
  templateUrl: "./send-budget.component.html",
  styleUrls: ["./send-budget.component.css"]
})
export class SendBudgetComponent implements OnInit {
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
  date = null;
  hour = null;
  ObjectServi = {
    address: "",
    category_service_id: this.session.getObject("budget").category,
    contact_name: "",
    date_service: "",
    description: "",
    district_id: "1",
    phone_name: "",
    user_provider_id: ""
  };
  selectedImage;
  file: File;
  imgaa: FileList;
  constructor(private router: Router, private session: SessionService, private districtS: DistrictService, private userS: UserService, private generalS: GeneralService, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    let budget = this.session.getObject("budget");
    this.providers = this.session.getObject("providers");
    this.budget.provider = "Proveedor: " + budget.provider_name;
    this.budget.user_provider_id = budget.provider;
    this.budget.category_service_id = budget.category;
    this.budget.date = budget.date;
    this.budget.hour = budget.hour;
    console.log(budget, "dasdadasdasdasd");
    this.getDistricts();
  }

  getDistricts() {
    this.spinner.show();
    this.districtS.guestGetDistricts().subscribe((response: any) => {
      this.districts = response.data;
      this.spinner.hide();
    });
  }

  onSelectImage(event) {
    this.imgaa = event.target.files;
    console.log(this.imgaa);
    // if (fileList.length > 0) {
    this.file = this.imgaa[0];
    // let formData2: FormData = new FormData();
    // formData2.append("uploadFile", file, file.name);
    console.log(this.file);
    // }
  }

  sendBudget(modal) {
    this.sbutton = true;
    this.messageT = true;
    this.services = [];
    var xd = [];
    this.ObjectServi.date_service = this.date + " " + this.hour;
    for (let i = 0; i < this.LocalProvider.length; i++) {
      this.ObjectServi.user_provider_id = this.LocalProvider[i].user_id;
      xd.push(this.ObjectServi);
    }

    console.log(JSON.stringify(xd), "hoda");
    console.log(this.ObjectServi, "asdadsdsa", this.date, this.hour, this.LocalProvider);
    // let formData2: FormData = new FormData();
    // formData2.append("image_file", this.file);
    this.userS.sendBudget({ services: JSON.stringify(xd) }).subscribe(
      response => {
        this.message = "Se agendó un servicio";
        modal.open();
        this.spinner.hide();
      },
      error => {
        // this.generalS.relogin(this.sendBudget, error, this.spinner);
      }
    );

    // this.budget.date_service = this.budget.date + ' ' + this.budget.hour;
    // if(!this.budget.contact_name || !this.budget.phone_name || !this.budget.address || !this.budget.description || !this.budget.date_service){
    // 	this.message = 'Campos incompletos';
    // 	this.messageT = false;
    // 	this.sbutton = false;
    // 	modal.open();
    // 	return;
    // }

    // for (var i = this.providers.length - 1; i >= 0; i--) {
    // 	this.budget.provider_name = this.providers[i].user.name + ' ' + this.providers[i].user.lastname;
    // 	this.budget.provider = this.providers[i].id;
    // 	this.services.push(JSON.parse(JSON.stringify(this.budget)));
    // }

    // console.log(this.budget.date_service);
    // this.spinner.show();
    // this.userS.sendBudget({services: this.services})
    // .subscribe(response => {
    // 	this.message = 'Se agendó un servicio';
    // 	modal.open();
    // 	this.spinner.hide();
    // }, error => {
    // 	this.generalS.relogin(this.sendBudget, error, this.spinner);
    // });
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
}
