import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-main-dashbord',
  imports: [MatCardModule, MatButtonModule, CommonModule,MatIconModule,MatDividerModule,MatListModule],
  templateUrl: './main-dashbord.component.html',
  styleUrls: ['./main-dashbord.component.css']
})
export class MainDashbordComponent {



  boxes = [
  { name: 'Total Farms', count: '12', trend: 'trending_up', percentage: '+2%', icon: 'home', color: '#f3f4ed', iconColor: '#5d6332' },
  { name: 'Active Systems', count: '48', trend: '', percentage: 'Stable', icon: 'grid_view', color: '#eef2ff', iconColor: '#4f46e5' },
  { name: 'Crop Health Score', count: '94%', trend: 'arrow_upward', percentage: '+5%', icon: 'health_and_safety', color: '#ecfdf5', iconColor: '#10b981' }
];



greenhousestatus = [
  { 
    title: 'Greenhouse 1: NFT System', 
    subtitle: 'Tomatoes (Vine Varieties)', 
    temp: '24.5°C', 
    humidity: '62%', 
    status: 'NORMAL',
    sync: '2 mins ago',
    borderColor: '#80823c' 
  },
  { 
    title: 'Greenhouse 2: DWC Unit', 
    subtitle: 'Butterhead Lettuce', 
    temp: '29.2°C', 
    humidity: '45%', 
    status: 'ALERT',
    sync: 'Critical: Temp too high',
    borderColor: '#e57373' 
  },
  { 
    title: 'North Wing: AeroPonics', 
    subtitle: 'Genoses Basil', 
    temp: '21.1°C', 
    humidity: '75%', 
    status: 'NORMAL',
    sync: '12 Mints  Ago',
     borderColor: '#80823c'
  }
];


}
