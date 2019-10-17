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

  services: any[] = [{ id: 1, name: 'Cotización' }, { id: 2, name: 'Tarifado' }];
  typeService: number = this.services[0].id;
  flagTypeService: boolean = true;

  title: string = "";
  categoryList: any[];
  ParentList: any[];
  categoryForm: FormGroup;
  submitted: boolean = false;
  flagRes: boolean = false;
  flagCreateUpdate: boolean = false;
  message: string = "";

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  titleP: string = "";
  pricedsList: any[];
  ParentPList: any[];
  pricedForm: FormGroup;
  submittedP: boolean = false;
  flagResP: boolean = false;
  flagCreateUpdateP: boolean = false;
  messageP: string = "";

  @ViewChild(DataTableDirective) dtElementP: DataTableDirective;
  dtOptionsP: DataTables.Settings = {};
  dtTriggerP: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private serviceService: ServiceService) {

  }

  ngOnInit() {
    this.InitCategoryService();
    this.InitPricedService();
  }

  switchType() {
    if (this.typeService == 1) {
      this.flagTypeService = true;
    } else if (this.typeService == 2) {
      this.flagTypeService = false;
    }
  }

  InitCategoryService() {
    this.categoryForm = this.formBuilder.group({
      id: [''],
      parent: ['', Validators.required],
      name: ['', Validators.required]
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0, 'desc']],
      language: AppSettings.LANG_SPANISH
    };
    this.getCategoryList();
  }

  InitPricedService() {
    this.pricedForm = this.formBuilder.group({
      id: [''],
      parent: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required]
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      order: [[0, 'desc']],
      language: AppSettings.LANG_SPANISH
    };
    this.getPricedList();
  }

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getCategoryList();
    });
  }

  rerenderP() {
    this.dtElementP.dtInstance.then((dtInstanceP: DataTables.Api) => {
      dtInstanceP.destroy();
      this.getPricedList();
    });
  }

  filterInit() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
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

  getCategoryList() {
    this.categoryList = [];
    this.spinner.show();
    this.serviceService.getCategories().subscribe(
      response => {
        console.log(response);
        let categories: any = response;
        this.categoryList.push(...categories.data);
        this.ParentList = this.categoryList.filter(item => item.parent == 0);
        this.ParentList.push({ id: 0, name: 'Sin Padre' });
        this.dtTrigger.next();
        this.filterInit();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
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
        this.ParentPList = this.pricedsList.filter(item => item.parent == 0);
        this.ParentPList.push({ id: 0, name: 'Sin Padre' });
        this.dtTriggerP.next();
        this.filterInitP();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  categoryDetail(modal, tempTittle: string, category: any = null) {
    this.flagRes = false;
    console.log("OpenModal Category - ", tempTittle);
    this.spinner.show();
    if (category) {
      this.title = `${tempTittle} ${category.id}`;
      this.flagCreateUpdate = false;
      this.categoryForm.setValue({ id: category.id, parent: category.parent, name: category.name });
      modal.open();
      this.spinner.hide();
    } else {
      this.title = tempTittle;
      this.flagCreateUpdate = true;
      this.categoryForm.setValue({ id: '', parent: '0', name: '' });
      modal.open();
      this.spinner.hide();
    }
  }

  PricedDetail(modal, tempTittle: string, priced: any = null) {
    this.flagRes = false;
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
      this.flagCreateUpdate = true;
      this.pricedForm.setValue({ id: '', parent: '0', name: '', price: '' });
      modal.open();
      this.spinner.hide();
    }
  }

  deleteCategory(categoryID: string) {
    this.spinner.show();
    this.serviceService.DeleteOneCategory(categoryID).subscribe(
      response => {
        console.log(response);
        this.rerender();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  deletePriced(pricedID: string) {
    this.spinner.show();
    this.serviceService.DeleteOnePriced(pricedID).subscribe(
      response => {
        console.log(response);
        this.rerender();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  onSubmit(myModal) {
    this.flagRes = false;
    console.log(this.categoryForm.value);

    if (this.flagCreateUpdate == true && this.categoryForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }

    this.spinner.show();
    if (this.flagCreateUpdate == true) {
      this.serviceService.postCreateCategory(this.categoryForm.value)
        .subscribe((response: any) => {
          console.log('Create', response);
          this.flagRes = true;
          this.message = 'Registro con éxito.';
          myModal.open();
          this.submitted = false;
          this.rerender();
          this.categoryForm.setValue({ id: '', parent: '0', name: '' });
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
        });
    } else {
      this.serviceService.putUpdateCategory(this.categoryForm.value)
        .subscribe((response: any) => {
          console.log('Update', response);
          this.flagRes = true;
          this.message = 'Actualizado con éxito.';
          myModal.open();
          this.submitted = false;
          this.rerender();
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
        });
    }
  }

  onSubmitP(myModal) {
    this.flagResP = false;
    console.log(this.pricedForm.value);

    if (this.flagCreateUpdateP == true && this.pricedForm.invalid) {
      console.log('invalidos');
      this.submitted = true;
      return;
    }
  }
}
