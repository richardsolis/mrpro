import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';
import { SessionService } from '../../../services/session.service';
import { ClientService } from '../../../services/client.service';

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

  client: any = {};
  flagPsw: boolean = false;
  
  constructor(private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
              private userService: UserService, private session: SessionService,
              private clientService: ClientService) { }

  ngOnInit() {
    this.initClient();
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
