import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';
import { SessionService } from '../../../services/session.service';
import { ClientService } from '../../../services/client.service';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  message = '';
  imageFoto:any;
  flagRes: boolean = false;
  listCard = [];
  client: any = {};
  flagPsw: boolean = false;
  pago = false;
  addMetod = false;
  cardCreit = {
    number: "",
    date: "",
    cvv: ""
  };
  dFlag: boolean = false;
  cvvFlag: boolean = false;
  nFlag: boolean = false;
  option1 = true;
  
  constructor(public ServiceService:ServiceService ,private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
              private userService: UserService, private session: SessionService,
              private clientService: ClientService) { }

  ngOnInit() {
    this.initClient();
    this.allCard();
  }

  addMetodButon() {
    this.addMetod = true;
  }
  
  editPago(){
    this.pago = true;
  }

  initClient(){
    console.log(this.session.getObject('user'));
    this.client = this.session.getObject('user');
    this.registerForm = this.formBuilder.group({
      name: [this.client.name, Validators.required],
      lastname: [this.client.lastname, Validators.required],
      email: [this.client.email, Validators.required],
      password: [''],
      password_confirmation: [''],
      phone: [this.client.phone, Validators.required],
      image: [this.client.image],
      doc_number: [this.client.doc_number, Validators.required],
      social: [this.client.social]
    });
  }

  setCardCredite(id){
    console.log(id)
    this.ServiceService.setCardCredit(id).subscribe((response: any) => {
      console.log(response);
      this.listCard = [];
      this.allCard();
    });
    
  }

  allCard() {
    this.userService.getCardBank().subscribe((response: any) => {
      this.listCard = response.data;
      console.log(this.listCard);
    });
  }

  dateExpiration(reg){
    const regExp    = new RegExp(/^\d{1,2}\/\d{1,2}$/);
    return regExp.test( reg );
  }

  deleteCard(cardID: string){
    this.userService.deleteCardBank(cardID).subscribe((response: any) => {
      console.log(response);
      this.listCard = [];
      this.allCard();
    });
}

cancelSend() {
  this.pago = false;
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

    this.userService.createCardBank(this.cardCreit).subscribe((response: any) => {
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

  selectFile(event){
    console.log(event.target.name);
  
    if (!event) {
      this.imageFoto  = null;
      return;
    }

    if(event.target.files[0].type.indexOf('image') < 0) {
      this.imageFoto  = null;
      return;
    }
      this.imageFoto = event.target.files[0];
      this.uploadFile(this.imageFoto, 'image');
     
  }

  uploadFile(file, name: string){
    this.spinner.show();
    this.userService.postSaveImageUser(file)
  	.subscribe((response: any) => {
      this.registerForm.get(name).setValue(response.data);  
  		this.spinner.hide();
  	}, (error: any) => {
  		console.log(error);
	  })
  }

  public onSubmit() {
    this.flagRes = false;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
        return;
    }

    if(this.registerForm.get('password').value){
      let valid = (this.registerForm.get('password').value == this.registerForm.get('password_confirmation').value)? true : false;
      if(!valid){
        this.flagPsw = true;
        return
      }
    }
    console.log('SUCCESS!! :-)',this.registerForm.value);
 
    this.spinner.show();
  	this.clientService.postUpdateClientProfile(this.registerForm.value)
  	.subscribe((response: any) => {
      console.log(response);
      this.session.destroy('user');
      let newClientInfo = { ...response.data.user, type: 'client' };
      this.session.setObject("user", newClientInfo);
      this.submitted = false;
      this.flagPsw = false;
      this.flagRes = true;
      this.initClient();
      this.message = "Datos actualizados correctamente.";
  		this.spinner.hide();
  	}, (error: any) => {
      this.submitted = false;
      this.flagPsw = false;
      this.flagRes = false;
      this.message = "";
      this.spinner.hide();
  		console.log(error);
	  		return;
  	});
  }

}
