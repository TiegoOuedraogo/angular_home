import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {Housinglocation} from "../housinglocation";
import {HousingService} from "../../service/housing.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="result">
<!--This is an angular syntax template
    it creates a template variable called housingLocation
    which represent an entry point from the housingLocation list

    passing the data
     [housingLocation]="housingLocation"
    -->
    <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation" ></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation []=[];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
