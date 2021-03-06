import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommissionService } from 'src/app/services/commission.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.css']
})
export class CommissionComponent implements OnInit {

  title:string = "";
  commissionList: any[];
  message: string = "";
  flagCreateUpdate: boolean = false;

  registerForm: FormGroup;
  submitted = false;
  flagRes = false;
  COM_ID: string = "";

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService, 
              private commissionService: CommissionService) { 
     
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [''],
      to: ['', Validators.required],
      from: ['', Validators.required],
      amount: ['', Validators.required],
      penalty: ['',Validators.required]
    });

    this.getCommissionList()
  }

  initOneComission(){
    return {
      id: '',
      to: '',
      from: '',
      amount: '',
      penalty: ''
    };
  }

  confirm(cmodal, commissionID: string){
    console.log(commissionID);
    this.COM_ID = "";
    cmodal.open();
    this.COM_ID = commissionID;
  }

  deleteOneComission(cmodal){
    
    this.spinner.show();
    this.commissionService.DeleteOneCommission(this.COM_ID)
        .subscribe((response: any) => {
          console.log('Delete',response);
          this.getCommissionList();
          this.spinner.hide();
          cmodal.close();
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
  }

  getCommissionList(){
    this.commissionList = [];
    this.spinner.show();
    this.commissionService.getCommissions().subscribe(
      response => {
        console.log(response);
        let commissions:any = response;
        this.commissionList.push(...commissions.data);
        this.spinner.hide();
      },
      error =>{
        console.log(error);
        this.spinner.hide();
    });
  }

  newComission(modal, tempTittle:string, commission:any = null) {
    this.flagRes = false;
    console.log("OpenModal Comsion - ", tempTittle);
    this.spinner.show();
    if(commission){
      this.title = `${tempTittle} ${commission.id}`;
      this.flagCreateUpdate = false;
      this.registerForm.setValue({id: commission.id, to: commission.to,
                                  from: commission.from, amount: commission.amount, penalty: commission.penalty});
      modal.open();
      this.spinner.hide();
    }else{
      this.title = tempTittle;
      this.flagCreateUpdate = true;
      this.registerForm.setValue(this.initOneComission());
      modal.open();
      this.spinner.hide();
    }

  }

  onSubmit(myModal) {
    this.flagRes = false;
    if (this.registerForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }

    if(this.registerForm.get('to').value < this.registerForm.get('from').value){
      this.flagRes = true;
      this.message = 'Rango Final debe ser mayor al Rango Inicial.';
      return;
    }

    console.log(this.registerForm.value);
    this.spinner.show();
    if(this.flagCreateUpdate == true){
      this.commissionService.postCreateCommission(this.registerForm.value)
        .subscribe((response: any) => {
          console.log('Create',response);
          this.flagRes = true;
          this.message = 'Registro con éxito.';
          myModal.open();
          this.submitted = false;
          this.getCommissionList();
          this.registerForm.setValue(this.initOneComission());
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          if(error.message){
            this.flagRes = true;
            this.message = 'El rango interfiere con otra comisión, modifiquelo.';
            this.spinner.hide();
          }
        });
    }else{
      this.commissionService.putUpdateCommission(this.registerForm.value)
        .subscribe((response: any) => {
          console.log('Update',response);
          this.flagRes = true;
          this.message = 'Actualizado con éxito.';
          myModal.open();
          this.submitted = false;
          this.getCommissionList();
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          if(error.message){
            this.flagRes = true;
            this.message = 'Ya existe una comisión en el mismo rango, por favor ingrese uno diferente.';
            this.spinner.hide();
          }
        });
    }

  }

}
