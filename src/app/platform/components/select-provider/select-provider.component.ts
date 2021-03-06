import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { CategoryService } from "../../../services/category.service";
import { DistrictService } from "../../../services/district.service";
import { ProviderService } from "../../../services/provider.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: "app-select-provider",
  templateUrl: "./select-provider.component.html",
  styleUrls: ["./select-provider.component.css"]
})
export class SelectProviderComponent implements OnInit {
  
  registerForm: FormGroup;

  providers: any = [];
  allcategories: any = [];
  allcategoriesP: any = [];
  districts: any = [];
  categories: any = [];
  subCategories: any = [];
  user: any = {};

  message = "";
  messageT = true;
  selectedProviders: any = 0;
  tprovider: any = {
    user: {}
  };
  provedores = [];
  flagCatType: boolean = false;
  totalPrice: number = 0;
  dropdownSettings = {};
  dropdownList = [];
  selectedItems = [];
  idsCategory = [];

  dropdownSettings2 = {};
  dropdownList2 = [];
  selectedItems2 = [];
  idsCategory2 = [];
  selection:any;
  multiSelect2 = false;
  limitPrice = false;
  valueButtons = 'categorie';
  constructor(private router: Router, private spinner: NgxSpinnerService, private session: SessionService,
              private userS: UserService, private categoryS: CategoryService, private districtS: DistrictService,
              private providerS: ProviderService, private formBuilder: FormBuilder, private _route:ActivatedRoute) {
    this.spinner.show();
    this.user = this.session.getObject("user");
    this.categoryS.guestGetCategories().subscribe((response: any) => {
      this.allcategories = response.data; 
      this.spinner.hide();
      this.categories = this.allcategories.filter(item => item.parent == 0);
      console.log(this.categories)
      for (let i = 0; i < this.categories.length; i++) {
        this.dropdownList.push({"id":i , "valueId":this.categories[i].id ,"itemName":this.categories[i].name})
      }
      console.log(this.dropdownList)
      // this.categoryChanged();
    });
    this.categoryS.guestGetPrices().subscribe((response: any) => {
      this.allcategoriesP = response.data;
    });
  }

  ngOnInit() {
    this.dropdownSettings = { 
      singleSelection: true, 
      text:"Seleccionar Categoria",
      selectAllText:'Seleccionar todo',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll:false,
      classes:"myclass custom-class",
      searchPlaceholderText: "Buscar..."
    }; 
    this.dropdownSettings2 = { 
      singleSelection: true, 
      text:"Seleccionar",
      selectAllText:'Seleccionar todo',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true,
      enableCheckAll:false,
      classes:"myclass custom-class",
      searchPlaceholderText: "Buscar..."
    };  
    const today = this.getActualDate();
    let tmpCategory = '';
    this._route.params.subscribe(res => {
      if(res.category){
        tmpCategory =  res.category;
      }else{
        tmpCategory = '1';
      }
    })
    this.registerForm = this.formBuilder.group({
      type: ['programmed'],
      category: [tmpCategory, Validators.required],
      subcategory: ['', Validators.required],
      district:  ['1', Validators.required],
      date:  [today, Validators.required],
      hour:  ['08:00:00', Validators.required],
      provider_name: [''],
      provider: ['0']
    });
  }

  onItemSelect(item:any){
    this.selection = item;
    console.log(item.valueId)
    this.registerForm.patchValue({
      category: item.valueId
    });
    console.log(this.registerForm)
    this.categoryChanged();
    this.selectedItems2 = [];
    this.multiSelect2 = true;
  }
  OnItemDeSelect(item:any){
      console.log(item);
  }
  onSelectAll(items: any){
  }
  onDeSelectAll(items: any){
      console.log(items);
      this.multiSelect2 = false;
  }

  onItemSelect2(item:any){
    this.registerForm.patchValue({
      subcategory: item.valueId
    });
    this.getPrice()
    console.log(item)
  }
  OnItemDeSelect2(item:any){
   
    console.log(item);
  }
  onSelectAll2(items: any){
  }
  onDeSelectAll2(items: any){
    console.log(items);
  }

  buttonSelectType(type: string) {
   
    this.providers = []
    this.dropdownList2 = [];
    this.selectedItems2 = [];
    if(type === 'programmed' && this.registerForm.get('type').value !== 'programmed'){
      this.valueButtons = 'categorie';
      this.flagCatType = false;
      this.categories = this.allcategories.filter(item => item.parent == 0);
      console.log(this.categories)
      this.dropdownList = [];
      this.selectedItems = [];
      for (let i = 0; i < this.categories.length; i++) {
        this.dropdownList.push({"id":i , "valueId":this.categories[i].id ,"itemName":this.categories[i].name})
      }

      this.registerForm.get('category').setValue('1');
      this.registerForm.get('type').setValue(type);
      // this.categoryChanged();
      this.addControls();
      this.selectedProviders = [];
      // this.onItemSelect(this.selection)
    }else if(type === 'priced'){
      this.valueButtons = 'priced';
      this.flagCatType = true;
      this.categories = this.allcategoriesP.filter(item => item.parent == 0);
      console.log(this.categories)
      this.selectedItems = [];
      this.dropdownList = [];
      for (let i = 0; i < this.categories.length; i++) {
        this.dropdownList.push({"id":i , "valueId":this.categories[i].id ,"itemName":this.categories[i].name})
      }
      this.registerForm.get('category').setValue('1');
      this.registerForm.get('type').setValue(type);
      // this.categoryChanged();
      this.removeControls();
      this.selectedProviders = [];
      // this.onItemSelect(this.selection)
    }
  }

  addControls(){
    const today = this.getActualDate();
    this.registerForm.addControl('date', new FormControl(today, Validators.required));
    this.registerForm.addControl('hour', new FormControl('08:00:00', Validators.required));
    this.registerForm.removeControl('price');
    this.registerForm.removeControl('quantity');
  }

  removeControls(){
    this.registerForm.removeControl('date');
    this.registerForm.removeControl('hour');
    this.registerForm.addControl('price', new FormControl(''));
    this.registerForm.addControl('quantity', new FormControl('', Validators.required));
  }

  getActualDate(){
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = ("0" + (tomorrow.getDate())).slice(-2);
    const month = ("0" + (tomorrow.getMonth() + 1)).slice(-2);
    const year = tomorrow.getFullYear();
    return `${year}-${month}-${day}`;
  }

  validateDate(){
    const tmp = this.registerForm.get('date').value;
    if(tmp){
      const currentYear: any[] = tmp.split('-');
      const today = new Date(this.getActualDate());
      const anyDay = new Date(this.registerForm.get('date').value);

      if(tmp.split('-')[0].length > 4){
        this.registerForm.get('date').setValue(this.getActualDate());
      }else if(today.getTime() > anyDay.getTime()){
        this.registerForm.get('date').setValue(this.getActualDate());
      }
    }else{
      this.registerForm.get('date').setValue(this.getActualDate());
    }
    
  }

  getDistricts() {
    this.districtS.guestGetDistricts().subscribe((response: any) => {
      this.districts = response.data;
    });
  }

  categoryChanged() {
    console.log("asd")
    this.registerForm.get('subcategory').setValue('');
    this.getProviders();
    this.getSubcategories();
  }

  getProviders() {
    this.spinner.show();
    this.providerS
      .guestGetProviders({
        [this.valueButtons]: this.registerForm.get('category').value,
        district: this.registerForm.get('district').value
      })
      .subscribe((response: any) => {
        if (response.data.length) {
          this.providers = response.data;
        } else {
          this.providers = [];
          for (var dproviders in response.data) {
            this.providers.push(response.data[dproviders]);
          }
        }
        for (var i = this.providers.length - 1; i >= 0; i--) {
          this.providers[i].experience = Math.floor((new Date().getTime() - new Date(this.providers[i].experience).getTime()) / (365 * 1000 * 3600 * 24));
          this.providers[i].rating = 0;
          this.providers[i].success = 0;
          this.providers[i].selected = false;
        }
        this.spinner.hide();
        console.log(this.providers);
      });
  }

  getSubcategories() {
    this.dropdownList2 = [];
    if(!this.flagCatType){
      this.subCategories = this.allcategories.filter(item => item.parent == this.registerForm.get('category').value);
    }else if(this.flagCatType){
      this.subCategories = this.allcategoriesP.filter(item => item.parent == this.registerForm.get('category').value);
    }
    console.log(this.subCategories)
    for (let i = 0; i < this.subCategories.length; i++) {
      this.dropdownList2.push({"id":i , "valueId":this.subCategories[i].id ,"itemName":this.subCategories[i].name})
    }
    console.log(this.dropdownList2)
  }

  getPrice(){
    for (let i = 0; i < this.subCategories.length; i++) {
      console.log(this.subCategories[i])
      if(this.registerForm.get('subcategory').value ==  this.subCategories[i].id){
        this.registerForm.get('price').setValue( this.subCategories[i].price);
        this.calculate();
        return;
      }
      if(this.registerForm.get('subcategory').value == ''){
        this.registerForm.get('price').setValue('');
        this.calculate();
        return;
      }
    }
  }

  calculate(){
    console.log("sdasd" ,this.registerForm.get('price').value, this.registerForm.get('quantity').value)
    if(this.registerForm.get('price').value && this.registerForm.get('quantity').value){
      let p = parseFloat(this.registerForm.get('price').value);
      let q =  parseInt(this.registerForm.get('quantity').value);
      this.totalPrice = p*q;
      console.log("sdasd" ,this.totalPrice)
      if (this.totalPrice > 999) {
        this.limitPrice = true;
      } else {
        this.limitPrice = false;
      }
      console.log(this.limitPrice)
    }else{
      this.totalPrice = 0;
    }
  }

  selectAllProviders() {
    this.provedores = [];
    if (this.selectedProviders == this.providers.length) {
      for (var i = this.providers.length - 1; i >= 0; i--) {
        this.providers[i].selected = false;
        this.provedores = [];
        this.session.setObject("provider", this.provedores);
      }
      this.selectedProviders = 0;
    } else {
      for (var i = this.providers.length - 1; i >= 0; i--) {
        this.providers[i].selected = true;
        this.provedores.push(this.providers[i]);
        this.session.setObject("provider", this.provedores);
      }
      this.selectedProviders = this.providers.length;
    }
  }

  selectProvider(provider) {
    provider.selected = !provider.selected;
    if (provider.selected) {
      this.provedores.push(provider);
      this.session.setObject("provider", this.provedores);
      this.selectedProviders++;
    } else {
      let index = this.provedores.findIndex(item => item.id == provider.id);
      if(index > -1){
        this.provedores.splice(index, 1);
      }
      this.session.setObject("provider", this.provedores);
      this.selectedProviders--;
    }
    console.log(this.provedores);
  }

  showFile(modal, provider) {
    this.session.setObject("userProvider", provider);
    this.tprovider = provider;
    modal.open();
  }

  scheduleAll(myModal) {
    if (this.registerForm.invalid) {
      this.message = "Complete todos los campos";
      this.messageT = false;
      myModal.open();
      return;
    }

    if (this.selectedProviders == 0) {
      this.message = "Seleccione al menos un profesional";
      this.messageT = false;
      myModal.open();
      return;
    }
    this.session.setObject("providers", this.providers.filter(item => item.selected));
    this.session.setObject("budget", this.registerForm.value);
    if (this.user && this.user.name) {
      this.router.navigate(["/pedir-propuesta"]);
    } else {
      this.router.navigate(["/ingresar"]);
    }
 
  }

}
