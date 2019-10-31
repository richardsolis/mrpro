import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean = false;
  flagRes: boolean = false;
  message: string = "";

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
              private userService: UserService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      telephone: [''],
      subject: ['', Validators.required],
      body: ['', Validators.required],
    });
  }

  onSubmit(){
    this.flagRes = false;
  	if (this.contactForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }
    console.log('EXITO', this.contactForm.value);
    this.userService.guestSendInfo(this.contactForm.value)
        .subscribe((response: any) => {
          console.log('Create',response);
          this.flagRes = true;
          this.message = '¡Se envío la información correctamente a nuestra equipo!';
          this.submitted = false;
          this.contactForm.setValue({name: '', email: '', telephone: '', subject: '', body:''});
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
        });
  }

}
