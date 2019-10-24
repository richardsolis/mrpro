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
  CAT_ID: string = "";

  flagError: boolean = false;
  messageError: string = "";

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
    this.getCategoryParent();
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

  getCategory(ID: string){
    let categoryName="";
    for (let index = 0; index < this.ParentList.length; index++) {
      if(this.ParentList[index].id == ID){
        categoryName = this.ParentList[index].name;
        break;
      }     
    } 
    return categoryName;
  }

  getCategoryParent() {
    this.serviceService.getCategories().subscribe(
      response => {
        console.log(response);
        let categories: any = response;
        let tmpList = [];
        tmpList.push(...categories.data);
        this.ParentList = tmpList.filter(item => item.parent == 0);
        this.ParentList.push({ id: 0, name: 'Sin Categoría' });
      },
      error => {
        console.log(error);
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
        this.dtTrigger.next();
        this.filterInit();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  confirm(cmodal, categoryID: string){
    this.flagError = false;
    this.CAT_ID = "";
    cmodal.open();
    this.CAT_ID = categoryID;
  }

  deleteCategory(cmodal) {
    this.flagError = false;
    this.spinner.show();
    this.serviceService.DeleteOneCategory(this.CAT_ID).subscribe(
      response => {
        console.log(response);
        this.CAT_ID = "";
        cmodal.close();
        this.rerender();
        this.spinner.hide();
      },
      error => {
        console.log(error);
        if(error.message){
          this.flagError = true;
          this.messageError = "No es posible eliminarla porque está siendo usada por un proveedor.";
        }
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
          this.spinner.hide();
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
          this.spinner.hide();
        });
    }
  }

}
