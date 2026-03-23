import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directive',
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  constructor(private _commonService:CommonService, private activatedRoute : ActivatedRoute) { }
  // directives are used to manipulate the DOM elements in angular
  // add or remove elements from the DOM.

  // 1. Attribute directives: they are used to change the appearance or behavior of an element.
  // 2. Structural directives: they are used to change the structure of the DOM by adding or removing elements.
  // eg. *ngIf, *ngFor, *ngSwitch
  displayName: string = '';
  isAdminUser: boolean = false;
  isFormManager: boolean = false;

  greenHouseStatus = [
    { id:1, Greenhouse: 'Greenhouse 1 : NFT System', indication: 'Normal', veggies: 'Tomato', temprature: 25, humidity: 60 },
    { id:2, Greenhouse: 'Greenhouse 2 : DWT unit', indication: 'Alert', veggies: 'Lettuce', temprature: 30, humidity: 70 },
    { id:3, Greenhouse: 'Noeth Wing : Aeroponics', indication: 'Normal', veggies: 'Spinach', temprature: 35, humidity: 80 },
  ];

  ngOnInit() {
    const result = this._commonService.additon(10, 30);
    console.log(result);
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.displayName = param['UName'];
    });
  }
}
