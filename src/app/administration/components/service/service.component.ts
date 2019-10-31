import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from '../../../services/service.service';
import { AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  titleP: string = "";
  pricedsList: any[];
  ParentPList: any[];
  pricedForm: FormGroup;
  submittedP: boolean = false;
  flagResP: boolean = false;
  flagCreateUpdateP: boolean = false;
  messageP: string = "";
  PRI_ID: string = "";

  flagError: boolean = false;
  messageError: string = "";

  ParentForm: FormGroup;
  submitted: boolean = false;
  flagRes: boolean = false;
  flagCreateUpdate: boolean = true;
  message: string = "";

  @ViewChild(DataTableDirective) dtElementP: DataTableDirective;
  dtOptionsP: DataTables.Settings = {};
  dtTriggerP: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private serviceService: ServiceService) {

  }

  ngOnInit() {
    this.InitPricedService();
  }

  InitPricedService() {

    this.ParentForm = this.formBuilder.group({
      id: [''],
      parent: ['0'],
      name: ['', Validators.required],
      price: ['0.00']
    });

    this.pricedForm = this.formBuilder.group({
      id: [''],
      parent: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.dtOptionsP = {
      pagingType: 'full_numbers',
      order: [[0, 'desc']],
      language: AppSettings.LANG_SPANISH
    };
    this.getCategoryParent();
    this.getPricedList();
  }

  ngOnDestroy() {
    this.dtTriggerP.unsubscribe();
  }

  rerenderP() {
    this.dtElementP.dtInstance.then((dtInstanceP: DataTables.Api) => {
      dtInstanceP.destroy();
      this.getPricedList();
      this.getCategoryParent();
    });
  }

  filterInitP() {
    this.dtElementP.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input').val('');
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }

  getCategory(ID: string){
    let categoryName="";
    for (let index = 0; index < this.ParentPList.length; index++) {
      if(this.ParentPList[index].id == ID){
        categoryName = this.ParentPList[index].name;
        break;
      }     
    } 
    return categoryName;
  }

  getCategoryParent() {
    this.serviceService.getPriceds().subscribe(
      response => {
        console.log(response);
        let priceds: any = response;
        let tmpList = [];
        tmpList.push(...priceds.data);
        this.ParentPList = tmpList.filter(item => item.parent == 0);
        this.ParentPList.push({ id: 0, name: 'Sin Categoría' });
      },
      error => {
        console.log(error);
      });
  }

  getPricedList() {
    this.pricedsList = [];
    this.spinner.show();
    this.serviceService.getPriceds().subscribe(
      response => {
        console.log(response);
        let priceds: any = response;
        this.pricedsList.push(...priceds.data);
        this.dtTriggerP.next();
        this.filterInitP();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  openParent(parentModal, cmodal){
    this.flagCreateUpdate = true;
    this.submitted = false;
    this.ParentForm.setValue({ id: '', parent: '0', name: '', price: '0.00' });
    cmodal.close();
    parentModal.open();
  }

  backModal(parentModal, cmodal){
    cmodal.open();
    parentModal.close();
  }

  PricedDetail(modal, tempTittle: string, priced: any = null) {
    this.flagResP = false;
    console.log("OpenModal Category - ", tempTittle);
    this.spinner.show();
    if (priced) {
      this.titleP = `${tempTittle} ${priced.id}`;
      this.flagCreateUpdateP = false;
      this.pricedForm.setValue({ id: priced.id, parent: priced.parent, name: priced.name, price: priced.price });
      modal.open();
      this.spinner.hide();
    } else {
      this.titleP = tempTittle;
      this.flagCreateUpdateP = true;
      this.pricedForm.setValue({ id: '', parent: '0', name: '', price: '' });
      modal.open();
      this.spinner.hide();
    }
  }

  parentDetail(modal, tempTittle: string, priced: any = null) {
    this.flagRes = false;
    console.log("OpenModal Parent - ", tempTittle);
    this.spinner.show();
    if (priced) {
      this.flagCreateUpdate = false;
      this.titleP = `${tempTittle} Categoría-${priced.id}`;
      this.ParentForm.setValue({ id: priced.id, parent: priced.parent, name: priced.name, price: priced.price });
      modal.open();
      this.spinner.hide();
    }
  }

  confirm(cmodal, pricedID: string){
    this.flagError = false;
    this.PRI_ID = "";
    cmodal.open();
    this.PRI_ID = pricedID;
  }

  deletePriced(cmodal) {
    this.flagError = false;
    this.spinner.show();
    this.serviceService.DeleteOnePriced( this.PRI_ID).subscribe(
      response => {
        console.log(response);
        this.PRI_ID = "";
        cmodal.close();
        this.rerenderP();
        this.spinner.hide();
      },
      error => {
        console.log(error.message);
        if(error.message){
          this.flagError = true;
          this.messageError = "No es posible eliminarla porque está siendo usada por un proveedor.";
        }
        this.spinner.hide();
      });
  }

  onSubmitP(myModal) {
    this.flagResP = false;
    console.log(this.pricedForm.value);

    if (this.flagCreateUpdateP == true && this.pricedForm.invalid) {
      console.log('invalidos');
      this.submittedP = true;
      return;
    }

    this.spinner.show();
    if (this.flagCreateUpdateP == true) {
      this.serviceService.postCreatePriced(this.pricedForm.value)
        .subscribe((response: any) => {
          console.log('Create', response);
          this.flagResP = true;
          this.messageP = 'Registro con éxito.';
          this.submittedP = false;
          this.rerenderP();
          this.spinner.hide();
          this.pricedForm.setValue({ id: '', parent: '0', name: '', price: '' });
        }, (error: any) => {
          this.submittedP = false;
          console.log(error);
          this.spinner.hide();
        });
    } else {
      this.serviceService.putUpdatePriced(this.pricedForm.value)
        .subscribe((response: any) => {
          console.log('Update', response);
          this.flagResP = true;
          this.messageP = 'Actualizado con éxito.';
          this.submittedP = false;
          this.rerenderP();
          this.spinner.hide();
        }, (error: any) => {
          this.submittedP = false;
          console.log(error);
          this.spinner.hide();
        });
    }
  }

  onSubmit(parentModal, cmodal) {
    this.flagRes = false;
    if (this.ParentForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }
    console.log(this.ParentForm.value);
    this.spinner.show();
    if (this.flagCreateUpdate == true) {
      this.serviceService.postCreatePriced(this.ParentForm.value)
        .subscribe((response: any) => {
          console.log('Create', response);
          this.rerenderP();
          this.submitted = false;
          parentModal.close();
          cmodal.open();
          this.ParentForm.setValue({ id: '', parent: '0', name: '', price: '' });
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          parentModal.close();
          cmodal.open();
          console.log(error);
          this.spinner.hide();
        });
    }else {
      this.serviceService.putUpdatePriced(this.ParentForm.value)
        .subscribe((response: any) => {
          console.log('Update', response);
          this.flagRes = true;
          this.message = 'Actualizado con éxito.';
          this.submitted = false;
          this.rerenderP();
          this.spinner.hide();
          this.ParentForm.setValue({id: response.data.id, parent: response.data.parent, 
                                    name: response.data.name, price: response.data.price});
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
          this.spinner.hide();
        });
    }
  }
}
