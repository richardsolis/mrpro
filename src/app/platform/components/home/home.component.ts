import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SessionService } from 'src/app/services/session.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/666666"}

  ];
  public _albums:any = [
    {
      src:'../../../../assets/images/portfoli-1.jpg',
      caption:'portafolio 1',
      thumb:'../../../../assets/images/portfoli-1.jpg'
    },
    {
      src:'../../../../assets/images/portfolio-2.jpg',
      caption:'portafolio 2',
      thumb:'../../../../assets/images/portfolio-2.jpg'
    },
    {
      src:'../../../../assets/images/portfolio-3.jpg',
      caption:'portafolio 2',
      thumb:'../../../../assets/images/portfolio-3.jpg'
    },
    {
      src:'../../../../assets/images/portfolio-4.jpg',
      caption:'portafolio 2',
      thumb:'../../../../assets/images/portfolio-4.jpg'
    },
    {
      src:'../../../../assets/images/portfolio-5.jpg',
      caption:'portafolio 2',
      thumb:'../../../../assets/images/portfolio-5.jpg'
    },
    {
      src:'../../../../assets/images/portfolio-6.jpg',
      caption:'portafolio 2',
      thumb:'../../../../assets/images/portfolio-6.jpg'
    }

  ]

  resultFilter: any[];

  public slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots":true};

  constructor(private _lightbox: Lightbox,private session: SessionService,
              private spinner: NgxSpinnerService, private userS: UserService,
              private router: Router) { }

  ngOnInit() {
    if(this.session.getObject('user')){
      this.resultFilter = [];
      this.spinner.show();
      this.userS.getBudget({ type: "client", status: 6 }).subscribe(
        response => {
          let providers:any = response;
          this.resultFilter.push(...providers.data.filter(item => (item.client_score == 0)));
          console.log(this.resultFilter);
          this.spinner.hide();
          if(this.resultFilter.length > 0){
            this.router.navigate(['/reservado/6']);
          }
        },
        error => console.log(error)
      );
    }
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
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
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
