import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Housinglocation} from "../housinglocation";
import { RouterModule} from "@angular/router";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!--[src] is the property binding.
           which tells angular the the value in
           quote is an actual propertyt from the component class.

           the double curly braces is the angular interpolation of

           -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}},
        {{housingLocation.state}}</p>
      <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
//   input Decorator
  @Input() housingLocation!: Housinglocation;

}
