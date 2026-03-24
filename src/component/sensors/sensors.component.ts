import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-sensors',
  imports: [MatGridListModule,MatCardModule,CommonModule,MatSlideToggleModule],
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.css'
})
export class SensorsComponent {

  data={pHLevel:"6.2",conductivity:1.8,waterTemp:"22.5°C",temperature:"21.5°C",humidity:"65%",reserviorLevel:"82%"}
  
  
}
