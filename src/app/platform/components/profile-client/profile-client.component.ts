import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../../services/user.service';

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
  
  constructor(private formBuilder: FormBuilder,	private spinner: NgxSpinnerService,
    private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      phone: ['', Validators.required],
      image: [''],
      doc_number: ['', Validators.required],
      social: ['']

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
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.submitted = true;
        return;
    }
    console.log('SUCCESS!! :-)',this.registerForm.value);
 
  }

}
