import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup } from "@angular/forms";

import localeDe from "@angular/common/locales/de";

declare var jquery: any;
declare var $: any;

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"]
})
export class ProvidersComponent implements OnInit {
  serviceSearch: any = {
    type: "programmed",
    category: "Gasfitería",
    day: "2019-07-10",
    hour: "08:00 am"
  };

  allProviders: any = [
    {
      name: "Luis Cardenas",
      category: "Gasfitería",
      rating: 4.0,
      success: 41,
      criminalrecord: true,
      policerecord: true,
      judicialrecord: true,
      phone: "999999999",
      type_cedula: "DNI",
      cedula: "77889955",
      certified: true,
      image: "provider.png",
      experience: 4
    },
    {
      name: "Amelia Contreras",
      category: "Lavandería",
      rating: 3.5,
      success: 41,
      criminalrecord: true,
      policerecord: true,
      judicialrecord: true,
      phone: "999999999",
      type_cedula: "DNI",
      cedula: "25632152",
      certified: true,
      image: "provider2.png",
      experience: 3
    },
    {
      name: "Sara Cruz",
      category: "Lavandería",
      rating: 4.5,
      success: 25,
      criminalrecord: true,
      policerecord: true,
      judicialrecord: true,
      phone: "999999999",
      type_cedula: "DNI",
      cedula: "65413321",
      certified: true,
      image: "provider.png",
      experience: 5
    },
    {
      name: "Armando Pozo",
      category: "Carpintería",
      rating: 5.0,
      success: 16,
      criminalrecord: true,
      policerecord: true,
      judicialrecord: true,
      phone: "999999999",
      type_cedula: "DNI",
      cedula: "14785236",
      certified: true,
      image: "provider2.png",
      experience: 2
    }
  ];

  providers;
  providerData = [];
  resultFilter = [];
  tprovider: any = {
    user_provider: {
      user: {}
    }
  };

  cancel: any = {
    budget_id: "2",
    status_id: "1"
  };

  constructor(private spinner: NgxSpinnerService, private router: Router, private session: SessionService, private userS: UserService) {}

  ngOnInit() {
    this.spinner.show();
    var year = new Date();
    this.userS.getBudget({ type: "client" }).subscribe(
      response => {
        this.providers = response;
        for (let i = 0; i < this.providers.data.length; i++) {
          this.providers.data[i].user_provider.experience = year.getFullYear() - parseInt(this.providers.data[i].user_provider.experience.split(" ")[0].substring(0, 4));
          this.providerData.push(this.providers.data[i]);
        }
        this.spinner.hide();
        console.log(this.providerData, "dasdasd");
        var groups2 = new Set(this.providerData.map(item2 => item2.unique));
        var result = [];
        groups2.forEach(g =>
          this.resultFilter.push({
            name: g,
            acordeon: false,
            values: this.providerData.filter(i => i.unique === g)
          })
        );
        console.log(this.resultFilter);
      },
      error => {
        // this.generalS.relogin(this.sendBudget, error, this.spinner);
      }
    );
    // this.categoryChanged("Gasfitería");
  }

  categoryChanged(event) {
    console.log(event);
    this.providers = this.allProviders.filter(item => item.category == event);
  }

  ficha(modal, proveedor) {
    this.tprovider = proveedor;
    modal.open();
  }

  acordeon(data) {
    for (let i = 0; i < this.resultFilter.length; i++) {
      this.resultFilter[i].acordeon = false;
    }
    if (data.acordeon == true) {
      data.acordeon = false;
    } else {
      data.acordeon = true;
    }

    // data.acordeon = true;
    console.log(data);
  }

  schedule(proveedor) {
    console.log(proveedor);
    this.cancel = {
      budget_id: proveedor.id,
      status_id: proveedor.status_service_id
    };
    this.userS.cancel(this.cancel).subscribe(response => {
      console.log(response);
    });
  }
}
