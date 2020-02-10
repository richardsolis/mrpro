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
  enable = []

  flagError: boolean = false;
  messageError: string = "";

  ParentForm: FormGroup;
  submittedP: boolean = false;
  flagResP: boolean = false;
  flagCreateUpdateP: boolean = true;
  messageP: string = "";
  categoryDataSolution:any;

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private formBuilder: FormBuilder, private spinner: NgxSpinnerService,
    private serviceService: ServiceService) { }

  ngOnInit() {
    this.InitCategoryService();
  }

  onChange(event,result){
    this.spinner.show();
    console.log(this.enable)
    console.log(event,result)
    if (result.status == 0) {
      result.status = 1
    }else {
      result.status = 0
    }
    this.serviceService.putUpdateCategory(result).subscribe(response => {
      console.log(response)
      this.spinner.hide();
    })
  }

  InitCategoryService() {

    this.ParentForm = this.formBuilder.group({
      id: [''],
      parent: ['0'],
      name: ['', Validators.required],
      status:['0']
    });

    this.categoryForm = this.formBuilder.group({
      id: [''],
      parent: ['', Validators.required],
      name: ['', Validators.required],
      status:['0']
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
      this.getCategoryParent();
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
        // console.log(response,"este es primero")
        // for (var i = 0; i < categories.data.length; i++) {
        //   if (categories.data[i].parent != 0) {
        //     this.categoryList.push(categories.data[i]);
        //   }
        // }
        console.log(this.categoryList,"este es segundo")
        this.dtTrigger.next();
        this.filterInit();
        console.log(this.categoryList,"elmaki")
        for (var i = 0; i < this.categoryList.length; i++) {
            if ( this.categoryList[i].status == 1) {
              this.enable.push(true)
            }else {
              this.enable.push(false)
            }
        }
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      });
  }

  openParent(parentModal, cmodal){
    this.flagCreateUpdateP = true;
    this.submittedP = false;
    this.ParentForm.setValue({ id: '', parent: '0', name: '' });
    cmodal.close();
    parentModal.open();
  }

  backModal(parentModal, cmodal){
    cmodal.open();
    parentModal.close();
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
        console.log(error.message);
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
      this.title =  (category.parent == '0')? `${tempTittle} Categoría-${category.id}` : `${tempTittle} Subcategoría-${category.id}`;
      this.flagCreateUpdate = false;
      this.categoryForm.setValue({ id: category.id, parent: category.parent, name: category.name, status: category.status });
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

  parentDetail(modal, tempTittle: string, category: any = null) {
    this.flagResP = false;
    this.spinner.show();
    if (category) {
      this.flagCreateUpdateP = false;
      this.title = `${tempTittle} Categoría-${category.id}`;
      this.ParentForm.setValue({ id: category.id, parent: category.parent, name: category.name, status: category.status });
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

  onSubmitP(parentModal, cmodal) {
    this.flagResP = false;
    if (this.ParentForm.invalid) {
      console.log('invalidos');
      this.submittedP = true;
      return;
    }
    console.log(this.ParentForm.value);
    this.spinner.show();
    if (this.flagCreateUpdateP == true) {
      this.serviceService.postCreateCategory(this.ParentForm.value)
        .subscribe((response: any) => {
          console.log('Create', response);
          this.rerender();
          this.submittedP = false;
          parentModal.close();
          cmodal.open();
          this.ParentForm.setValue({id:  '',parent: '0', name: '' });
          this.spinner.hide();
        }, (error: any) => {
          this.submittedP = false;
          parentModal.close();
          cmodal.open();
          console.log(error);
          this.spinner.hide();
        });
    }else {
      this.serviceService.putUpdateCategory(this.ParentForm.value)
        .subscribe((response: any) => {
          console.log(this.ParentForm.value)
          console.log('Update', response);
          this.flagResP = true;
          this.messageP = 'Actualizado con éxito.';
          this.submittedP = false;
          this.rerender();
          this.spinner.hide();
          this.ParentForm.setValue({id: response.data.id, parent: response.data.parent, name: response.data.name});
        }, (error: any) => {
          this.submittedP = false;
          console.log(error);
          this.spinner.hide();
        });
    }
  }

}
