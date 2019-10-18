import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from 'src/app/services/service.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private serviceService: ServiceService) { }

  ngOnInit() {
    this.InitCategoryService();
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

  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.getCategoryList();
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
          this.submitted = false;
          this.rerender();
          this.spinner.hide();
        }, (error: any) => {
          this.submitted = false;
          console.log(error);
        });
    }
  }

}
