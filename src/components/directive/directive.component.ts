import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {


  // directives are used to manipulate the DOM elements in angular
  // add or remove elements from the DOM.

  // 1. Attribute directives: they are used to change the appearance or behavior of an element.
  // 2. Structural directives: they are used to change the structure of the DOM by adding or removing elements.
  // eg. *ngIf, *ngFor, *ngSwitch

  isAdminUser: boolean = false;
  isFormManager: boolean = false;

  greenHouseStatus = [
    { id:1, Greenhouse: 'Greenhouse 1 : NFT System', indication: 'Normal', veggies: 'Tomato', temprature: 25, humidity: 60 },
    { id:2, Greenhouse: 'Greenhouse 2 : DWT unit', indication: 'Alert', veggies: 'Lettuce', temprature: 30, humidity: 70 },
    { id:3, Greenhouse: 'Noeth Wing : Aeroponics', indication: 'Normal', veggies: 'Spinach', temprature: 35, humidity: 80 },
  ];
}
