import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../../services/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { AppSettings } from 'src/app/app.settings';
import { CategoryService } from 'src/app/services/category.service';
import { SessionService } from 'src/app/services/session.service';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  public pathImage: string = AppSettings.BASE_PATH_IMAGE;
  imageChat:any;
  elemento:any;
  currentChat: string;
  currentBudgetID: string;
  isDisabled: boolean;
  currentBudget: any = {};
  hour: string;
  categories: any[];
  user: any = {};
  execute: boolean = false;
  arrayImgs:string[];
  flagItem: boolean = false;
  flagPrice: boolean = false;

  PATH: string = "";

  public slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots":true};
  constructor(public _cs: ChatService, private _route:ActivatedRoute, 
              private spinner: NgxSpinnerService, private _router:Router,
              private userService: UserService, private categoryService: CategoryService,
              private session: SessionService,
              public ServiceService:ServiceService) {

    this._route.params.subscribe(res => {
      this.user = this.session.getObject("user");
      this.arrayImgs = [];
      console.log("user",this.user);
      if (res.id) {
        this.currentChat = res.id;
        this.currentBudgetID = res.BudgetId;
        this.spinner.show();

        this._cs.cargarMensajes( this.currentChat)
            .subscribe(()=>{
              setTimeout( ()=>{
                this.elemento.scrollTop = this.elemento.scrollHeight;
                this.spinner.hide();
              },100);
            }, (error: any) => {
              console.log(error);
              this.spinner.hide();
            });

        this.userService.getOneBudget(this.currentBudgetID)
          .subscribe((res: any)=>{
            console.log("budget info: ", res);
            this.flagItem = (res.data.image_url.length>0)? false : true;
            this.hour = res.data.date_service.split(" ")[1];
            res.data.date_service = res.data.date_service.split(" ")[0];
            this.currentBudget = res.data;
          }, (error: any) => {
            console.log(error);
          });
        
        /*this.categoryService.guestGetCategories()
          .subscribe((response: any) => {
            this.categories = response.data;
          }, (error: any) => {
            console.log(error);
          });*/
      }
    });
  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  getName(array: any[], value){
    let temp = "";
    for (var i = 0; i < array.length; i++) {
      if(array[i].id == value){
        temp = array[i].name;
        break;
      }
    }
    return temp;
  }

  updateInfo(){
    if(this.currentBudget.price){
      this.flagPrice = false;
      const specificDate = `${this.currentBudget.date_service} ${this.hour}`;
      this.spinner.show();
      this.userService.updateBudgetInfo(this.currentBudget, specificDate)
      .subscribe((response: any) => {
        console.log("updateInfo",response);
        this.spinner.hide();
        this.mensaje = "El precio, fecha y hora se ha actualizado.";
        this.enviar_mensaje('3');
      }, (error: any) => {
        console.log(error);
        this.spinner.hide();
      })
    }
    else{
      this.flagPrice = true;
    }
    
  }

  getInfo(){
    this.spinner.show();
    this.userService.getOneBudget(this.currentBudgetID)
          .subscribe((res: any)=>{
            console.log("budget info: ", res);
            this.hour = res.data.date_service.split(" ")[1];
            this.currentBudget.price= res.data.price;
            this.currentBudget.date_service = res.data.date_service.split(" ")[0];
            this.spinner.hide();
          });
  }

  confirm(cmodal, path:string){
    this.PATH = "";
    cmodal.open();
    this.PATH = path;
  }

  closeChat(cmodal){
    this.spinner.show();
      this.userService.updateStatus('3',this.currentBudgetID)
        .subscribe((res: any) => {
          console.log(res);
          cmodal.close();
          this.spinner.hide();
          this.goback(this.PATH);
        }, (error: any) => {
          console.log(error);
          this.spinner.hide();
        });
    

  }

  selectFile(event){
    console.log(event.target.name);
  
    if (!event) {
      this.imageChat = null;
      return;
    }

    if(event.target.files[0].type.indexOf('image') < 0) {
      this.imageChat = null;
      return;
    }

      this.imageChat = event.target.files[0];
      this.uploadFile(this.imageChat);
  }

  rechazarPropuesta(){
    this.ServiceService.sendCancelProvider(this.currentBudgetID).subscribe((response:any) => {
      console.log("richard",response)
    })
  }

  uploadFile(file){
    this.spinner.show();
    this.userService.postSaveImageUser(file)
      .subscribe((response: any) => {
        this.isDisabled = true;
        console.log(response);
        /*this.userService.convertImage(response.data)
          .subscribe((res: any)=>{
            console.log("convert: ", res);*/
            this._cs.agregarMensajePrivado(response.data, '', '2', this.currentChat, this.user.id, this.user.name )
                    .then( ()=>{
                      this.isDisabled = false;
                    })
                    .catch( (err)=> {
                      this.isDisabled = false;
                      console.error('Error al enviar imagen mensaje',  err );
                    });
              this.spinner.hide();
            /*}, (error: any) => {
              console.log(error);
            })*/
        },
        (error)=>{
          console.log(error);
        });
      
  }

  getBase64(nameFile: string){
    console.log(nameFile);
    this.userService.convertImage(nameFile).pipe(
                                            map( (res:any) =>{
                                                  return res.data
                                            })).subscribe((res:string)=>{
                                              console.log('base64', res);
                                            });
    return "hola";
  }

  enviar_mensaje(tipo:string){
    console.log( this.mensaje );
    this.isDisabled = true;
    if( this.mensaje.length === 0 ){
      return;
    }

    this.userService.getOneBudget(this.currentBudgetID)
          .subscribe((res: any)=>{
            if(res.data.status_service_id == 4){
              this._cs.agregarMensajePrivado( this.mensaje,"", tipo, this.currentChat, this.user.id, this.user.name )
                      .then( ()=>{
                        this.mensaje="";
                        this.isDisabled = false;
                      })
                      .catch( (err)=> {
                        this.isDisabled = false;
                        console.error('Error al enviar',  err );
                      });
            }else{
              this.mensaje="";
              this.isDisabled = false;
              alert("Este chat fue cerrado por el proveedor, regresar a solicitudes.");
            }
          });
    /**/
  }

  startChat(chatId: string){
    this.currentChat = chatId;
    //this._cs.crearChat(title);
    //this._cs.cargarChat(chatId).subscribe();
  }

  goback(path: string){
    this._router.navigate([path, 4]);
  }

  newBudget(modal) {
    console.log("OpenModal newBudget - ", this.currentBudget);
    if(this.currentBudget.price){
      this.flagPrice = false;
      this.spinner.show();
      modal.open();
      this.spinner.hide();
    }else{
      this.flagPrice = true;
    }
    
  }

  executeBudget(modal){
    this.execute = false;
    this.spinner.show();
    this.userService.executeBudget(this.currentBudgetID)
        .subscribe((res: any)=>{
          this.execute = true;
          console.log("budget execute: ", res);
          this.spinner.hide();
        },
        (error)=>{
          console.log(error);
          this.spinner.hide();
        });
  }

  details(myImages, images){
    myImages.open();
    this.arrayImgs = images;
    this.flagItem = (this.arrayImgs.length>0)? false : true;

    console.log(this.arrayImgs);
  }

  getActualDate(){
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate());
    const day = ("0" + (tomorrow.getDate())).slice(-2);
    const month = ("0" + (tomorrow.getMonth() + 1)).slice(-2);
    const year = tomorrow.getFullYear();
    return `${year}-${month}-${day}`;
  }

  validateDate(){
    const tmp = this.currentBudget.date_service;
    if(tmp){
      const currentYear: any[] = tmp.split('-');
      const today = new Date(this.getActualDate());
      const anyDay = new Date(this.currentBudget.date_service);

      if(tmp.split('-')[0].length > 4){
        this.currentBudget.date_service = this.getActualDate();
      }else if(today.getTime() > anyDay.getTime()){
        this.currentBudget.date_service = this.getActualDate();
      }
    }else{
      this.currentBudget.date_service = this.getActualDate();
    }
  }

  convertImgToDataURL(imageURL: string){
    let canvas = document.createElement('canvas');
    let dataURL = canvas.toDataURL('image/jpeg',imageURL);
    return dataURL;
  }

  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
