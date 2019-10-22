import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService) { }

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
  	if (this.contactForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }
    console.log('EXITO', this.contactForm.value);
  }

}
