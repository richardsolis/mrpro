import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { CategoryService } from "../../../services/category.service";
import { DistrictService } from "../../../services/district.service";
import { ProviderService } from "../../../services/provider.service";
import { NgxSpinnerService } from "ngx-spinner";
// import { ConsoleReporter } from "jasmine";

@Component({
  selector: "app-select-provider",
  templateUrl: "./select-provider.component.html",
  styleUrls: ["./select-provider.component.css"]
})
export class SelectProviderComponent implements OnInit {
  tomorrow = new Date();
  
  serviceSearch: any = {
    type: "programmed",
    category: 1,
    subcategory: 6,
    district: 1,
    date: new Date(),
    hour: "08:00:00",
    provider_name: "",
    provider: 0
  };
  allProviders: any = [];

  providers: any = [];
  allcategories: any = [];
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
  userProvider: any = {};

  provedores = [];
  constructor(private router: Router, private spinner: NgxSpinnerService, private session: SessionService, private userS: UserService, private categoryS: CategoryService, private districtS: DistrictService, private providerS: ProviderService) {}

  ngOnInit() {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
    this.serviceSearch.date = this.tomorrow;
    this.provedores = [];
    this.spinner.show();
    this.user = this.session.getObject("user");
    this.categoryS.guestGetCategories().subscribe((response: any) => {
      this.allcategories = response.data;
      this.spinner.hide();
      this.categories = this.allcategories.filter(item => item.parent == 0);
      this.categoryChanged();
      this.getDistricts();
    });
  }

  getDistricts() {
    this.districtS.guestGetDistricts().subscribe((response: any) => {
      this.districts = response.data;
      console.log(response);
    });
  }

  buttonSelectType(type) {
    console.log(type);
    this.serviceSearch.type = type;
  }

  userPor(person) {
    this.userProvider = this.session.setObject("userProvider", person);
  }
  getProviders() {
    this.spinner.show();
    this.providerS
      .guestGetProviders({
        categorie: this.serviceSearch.category,
        district: this.serviceSearch.district
      })
      .subscribe((response: any) => {
        console.log(response);
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
        console.log(this.providers);
        this.spinner.hide();
      });
  }

  selectAllProviders() {
    console.log([{ user_provider_id: "1", contact_name: "Raquel", phone_name: "Rosas", address: "Av juan 23", district_id: "3", category_service_id: "2", description: "Es una rotura pequeña help!!", date_service: "2019-08-05 13:00:00" }, { user_provider_id: "1", contact_name: "Raquel", phone_name: "Rosas", address: "Av juan 23", district_id: "3", category_service_id: "2", description: "Es una rotura pequeña help!!", date_service: "2019-08-05 13:00:00" }]);
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
        console.log(this.provedores, "dasdasdasd");
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
      var hola = this.provedores.splice(this.provedores.findIndex(word => word.user.name == provider.user.name), 1);
      //   var hola = this.provedores.filter(word => word.user.name == provider.user.name);
      console.log(this.provedores, "rererererer");
      this.session.setObject("provider", this.provedores);
      this.selectedProviders--;
    }
  }

  showFile(modal, provider) {
    this.session.setObject("userProvider", provider);
    this.userProvider = provider;
    console.log(provider);
    this.tprovider = provider;
    modal.open();
  }

  getSubcategories() {
    console.log(this.serviceSearch.category);
    this.subCategories = this.allcategories.filter(item => item.parent == this.serviceSearch.category);
    this.serviceSearch.subcategory = this.subCategories.length ? this.subCategories[0].id : 0;
    console.log(this.serviceSearch.subcategory);
    console.log(this.subCategories);
  }

  categoryChanged() {
    this.getProviders();
    // this.providers = this.allProviders.filter(item => item.category == event);
    this.getSubcategories();
  }

  schedule(myModal, provider) {
    console.log("dasdasdasd");
    this.serviceSearch.provider_name = provider.user.name + " " + provider.user.lastname;
    this.serviceSearch.provider = provider.id;
    this.session.setObject("providers", [provider]);
    this.session.setObject("budget", this.serviceSearch);
    if (this.user && this.user.name) {
      this.router.navigate(["/pedir-propuesta"]);
    } else {
      this.router.navigate(["/ingresar"]);
    }
  }

  scheduleAll(myModal) {
    console.log(myModal, "hola");
    if (this.selectedProviders == 0) {
      this.message = "Seleccione al menos un profesional";
      this.messageT = false;
      myModal.open();
      return;
    }
    this.session.setObject("providers", this.providers.filter(item => item.selected));
    this.session.setObject("budget", this.serviceSearch);
    if (this.user && this.user.name) {
      this.router.navigate(["/pedir-propuesta"]);
    } else {
      this.router.navigate(["/ingresar"]);
    }
  }

  goReserved() {
    this.router.navigate(["/reservado"]);
  }
}
