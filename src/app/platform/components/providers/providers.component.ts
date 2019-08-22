import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";

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

  constructor(private router: Router, private session: SessionService, private userS: UserService) {}

  ngOnInit() {
    var year = new Date();
    this.userS.getBudget({ type: "client" }).subscribe(
      response => {
        this.providers = response;
        for (let i = 0; i < this.providers.data.length; i++) {
          this.providers.data[i].user_provider.experience = year.getFullYear() - parseInt(this.providers.data[i].user_provider.experience.split(" ")[0].substring(0, 4));
          this.providerData.push(this.providers.data[i]);
        }
        console.log(this.providerData, "dasdasd");
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

  schedule() {
    // this.router.navigate(['/ingresar']);
  }
}
