import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";
import { SessionService } from "../../../services/session.service";
import { UserService } from "../../../services/user.service";
import { CategoryService } from "../../../services/category.service";
import { DistrictService } from "../../../services/district.service";
import { ProviderService } from "../../../services/provider.service";
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup } from "@angular/forms";
// import { ConsoleReporter } from "jasmine";

@Component({
  selector: "app-select-provider",
  templateUrl: "./select-provider.component.html",
  styleUrls: ["./select-provider.component.css"]
})
export class SelectProviderComponent implements OnInit {
  tomorrow = new Date();
  
  registerForm: FormGroup;
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
  
  constructor(private router: Router, private spinner: NgxSpinnerService, private session: SessionService, private userS: UserService, private categoryS: CategoryService, private districtS: DistrictService, private providerS: ProviderService) {}

  ngOnInit() {

  }

  scheduleAll(myModal) {
    console.log(myModal);
 
  }

}
