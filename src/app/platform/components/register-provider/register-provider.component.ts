import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { UserService } from "../../../services/user.service";
import { DistrictService } from "src/app/services/district.service";
import { CategoryService } from "src/app/services/category.service";
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: "app-register-provider",
  templateUrl: "./register-provider.component.html",
  styleUrls: ["./register-provider.component.css"]
})
export class RegisterProviderComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  flagRes = false;
  message = "";
  tipoForm: boolean;
  imageLogo: any;
  imageFoto: any;
  pdfpoliciales: any;
  pdfPenales: any;
  pdfJudiciales: any;

  districts: any[];
  categories: any[];

  flagSize: boolean = false;
  flagImg: boolean = false;
  flagPsw: boolean = false;
  idCertificate = [];
  dropdownList = [];
  selectedItems = [];
  selectedItems2 = [];
  dropdownSettings = {};
  dropdownSettings2 = {};
  dropdownList3 = [];
  selectedItems3 = [];
  dropdownSettings3 = {};
  idsCategory = [];
  certificatesAll = [];
  categories3 = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private districtService: DistrictService,
    private categoryService: CategoryService,
    public ServiceService:ServiceService
  ) {
    this.tipoForm = true;
    //this.images = [];
    this.districtService.guestGetDistricts().subscribe(
      (response: any) => {
        this.districts = response.data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.categoryService.guestGetCategories().subscribe(
      (response: any) => {
        this.categories = response.data.filter(item => item.parent == 0);
          console.log(this.categories)
          for (let i = 0; i < this.categories.length; i++) {
            this.dropdownList.push({"id":i,"valueId":this.categories[i].id,"itemName":this.categories[i].name},)
          }
      },
      (error: any) => {
        console.log(error);
    });

    this.categoryService.guestGetPrices().subscribe((res: any) => {
      this.categories3.push(...res.data.filter(item => item.parent == 0));
      for (let i = 0; i < this.categories3.length; i++) {
        this.dropdownList3.push({"id":i,"valueId":this.categories3[i].id,"itemName":this.categories3[i].name},)
      }
      console.log(this.categories3)
    });
  }

  ngOnInit() {
    console.log("asdasd")
    this.ServiceService.getAllCertificateAll().subscribe((response:any) => {
      console.log(response.data)
      for (let i = 0; i < response.data.length; i++) {
        this.certificatesAll.push({"id":i,"valueId":response.data[i].id,"itemName":response.data[i].name},)
      }
      console.log(this.certificatesAll,"hola")
    })
    this.dropdownSettings3 = { 
      singleSelection: false, 
      text:"Seleccionar Certificado tarifado",
      selectAllText:'Seleccionar todo',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll:false,
      classes:"myclass custom-class"
    };
    this.dropdownSettings2 = { 
      singleSelection: false, 
      text:"Seleccionar Certificado",
      selectAllText:'Seleccionar todo',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll:false,
      classes:"myclass custom-class"
    }; 
    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Seleccionar Categoria",
      selectAllText:'Seleccionar todo',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll:false,
      classes:"myclass custom-class"
    }; 
    const today = this.getActualDate();
    this.registerForm = this.formBuilder.group({
      tipo: ["1", Validators.required],
      ruc: ["", Validators.required],
      rSocial: ["", Validators.required],
      dfiscal: ["", Validators.required],
      dComercial: [""],
      dTaller: [""],
      telefono: ["", Validators.required],
      logo: [""],
      sWeb: [""],
      correo: ["", Validators.required],
      dni: ["", Validators.required],
      nombre: ["", Validators.required],
      apellidos: ["", Validators.required],
      ptelefono: ["", Validators.required],
      direccion:  ['', Validators.required],
      foto: [""],
      psWeb: [""],
      pcorreo: ["", Validators.required],
      policiales: [""],
      penales: [""],
      judiciales: [""],
      experiencia:  [today],
      contrasena: ["", [Validators.required, Validators.minLength(8)]],
      contrasena2: ["", [Validators.required, Validators.minLength(8)]],
      // eBancaria:  ['',Validators.required],
      nCuenta: [""],
      interbancaria: [""],
      certificates: [],
      categories: [[]],
      priced: [[]],
      districts: [[]]
    });
    this.tipo("Particular");
  }
  onItemSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
  }
  onDeSelectAll(items: any){
      console.log(items);
  }

  onItemSelect2(item:any){
    console.log(item);
    console.log(this.selectedItems2);
  }
  OnItemDeSelect2(item:any){
      console.log(item);
      console.log(this.selectedItems2);
  }
  onSelectAll2(items: any){
  }
  onDeSelectAll2(items: any){
      console.log(items);
  }

  onItemSelect3(item:any){
    console.log(item);
    console.log(this.selectedItems2);
  }
  OnItemDeSelect3(item:any){
      console.log(item);
      console.log(this.selectedItems2);
  }
  onSelectAll3(items: any){
  }
  onDeSelectAll3(items: any){
      console.log(items);
  }

  getActualDate() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = ("0" + tomorrow.getDate()).slice(-2);
    const month = ("0" + (tomorrow.getMonth() + 1)).slice(-2);
    const year = tomorrow.getFullYear();
    return `${year}-${month}-${day}`;
  }

  addControls() {
    this.registerForm.addControl(
      "ruc",
      new FormControl("", Validators.required)
    );
    this.registerForm.addControl(
      "rSocial",
      new FormControl("", Validators.required)
    );
    this.registerForm.addControl(
      "dfiscal",
      new FormControl("", Validators.required)
    );
    this.registerForm.addControl("dComercial", new FormControl(""));
    this.registerForm.addControl("dTaller", new FormControl(""));
    this.registerForm.addControl(
      "telefono",
      new FormControl("", Validators.required)
    );
    this.registerForm.addControl("logo", new FormControl(""));
    // this.registerForm.addControl("sWeb", new FormControl(""));
    this.registerForm.addControl(
      "correo",
      new FormControl("", Validators.required)
    );
  }

  removeControls() {
    this.registerForm.removeControl("ruc");
    this.registerForm.removeControl("rSocial");
    this.registerForm.removeControl("dfiscal");
    this.registerForm.removeControl("dComercial");
    this.registerForm.removeControl("dTaller");
    this.registerForm.removeControl("telefono");
    this.registerForm.removeControl("logo");
    this.registerForm.removeControl("sWeb");
    this.registerForm.removeControl("correo");
  }

  tipo(option: string) {
    //console.log("Antes",this.registerForm.value);
    if (option === "Empresa" && this.tipoForm === false) {
      this.tipoForm = true;
      this.registerForm.get("tipo").setValue("0");
      this.addControls();
    } else if (option === "Particular") {
      this.tipoForm = false;
      this.registerForm.get("tipo").setValue("1");
      this.removeControls();
    }
    //console.log("despues",this.registerForm.value);
  }

  selectFile(event) {
    console.log(event.target.name);

    if (!event) {
      this.imageFoto = null;
      this.imageLogo = null;
      return;
    }

    if (event.target.files[0].type.indexOf("image") < 0) {
      this.imageFoto = null;
      this.imageLogo = null;
      return;
    }

    //this.images.push(event.target.files[0]);
    if (event.target.name === "logo") {
      if (event.target.files[0].size > 2500000) {
        this.flagSize = true;
        this.imageLogo = null;
        return;
      }
      this.flagSize = false;
      this.imageLogo = event.target.files[0];
      this.uploadFile(this.imageLogo, "logo");
    } else if (event.target.name === "foto") {
      if (event.target.files[0].size > 2500000) {
        this.flagImg = true;
        this.imageLogo = null;
        return;
      }
      this.flagImg = false;
      this.imageFoto = event.target.files[0];
      this.uploadFile(this.imageFoto, "foto");
    }
  }

  selectDoc(event) {
    console.log(event.target.name);

    if (!event) {
      this.imageFoto = null;
      this.imageLogo = null;
      return;
    }

    if (event.target.files[0].type.indexOf("pdf") < 0) {
      this.imageFoto = null;
      this.imageLogo = null;
      return;
    }

    //this.images.push(event.target.files[0]);
    if (event.target.name === "policiales") {
      this.pdfpoliciales = event.target.files[0];
      this.uploadFile(this.pdfpoliciales, "policiales");
    } else if (event.target.name === "penales") {
      this.pdfPenales = event.target.files[0];
      this.uploadFile(this.pdfPenales, "penales");
    } else if (event.target.name === "judiciales") {
      this.pdfJudiciales = event.target.files[0];
      this.uploadFile(this.pdfJudiciales, "judiciales");
    }
  }

  uploadFile(file, name: string) {
    this.spinner.show();
    this.userService.postSaveImageUser(file).subscribe(
      (response: any) => {
        this.registerForm.get(name).setValue(response.data);
        this.spinner.hide();
      },
      (error: any) => {
        console.log(error);
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

  onSubmit(myModal) {
    this.idCertificate = [];
    for (let i = 0; i < this.selectedItems2.length; i++) {
      this.idCertificate.push(this.selectedItems2[i].valueId)
    }
    this.idsCategory = []
    for (let i = 0; i < this.selectedItems.length; i++) {
      this.idsCategory.push(this.selectedItems[i].valueId)
    }
    this.registerForm.patchValue({
      categories: this.idsCategory
    });
    console.log(this.idCertificate)
    this.registerForm.patchValue({
      certificates: this.idCertificate
    });
    if (
      this.registerForm.get("contrasena").value !==
      this.registerForm.get("contrasena2").value
    ) {
      console.log("contraseñas");
      this.flagPsw = true;
      return;
    }

    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      console.log("invalidos");
      this.submitted = true;
      return;
    }

    this.spinner.show();
    console.log(this.registerForm.value)
    this.userService.createProvider(this.registerForm.value).subscribe(
      (response: any) => {
        this.flagPsw = false;
        this.flagRes = true;
        this.message = "Se ha registrado correctamente, ingrese a su bandeja de correo para verificar su cuenta.";
        myModal.open();
        this.submitted = false;
        this.spinner.hide();
      },
      (error: any) => {
        console.log(error);
        this.flagPsw = false;
        this.submitted = false;
        this.spinner.hide();
        if (error.error && error.error.data && error.error.data.doc_number) {
          this.flagRes = false;
          this.message = "El DNI ya esta registrado.";
          myModal.open();
          this.spinner.hide();
          return;
        }
        if (error.error && error.error.data && error.error.data.email) {
          this.flagRes = false;
          this.message = "El correo Electrónico ya esta registrado.";
          myModal.open();
          this.spinner.hide();
          return;
        }
      }
    );
  }

  goBack() {
    this.router.navigate(["/home"]);
  }
}
