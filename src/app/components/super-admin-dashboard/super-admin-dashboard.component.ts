import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
 import { MatIcon } from "@angular/material/icon";
import { MatNavList } from "@angular/material/list";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { NgClass } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { MatSelectModule } from '@angular/material/select';


 


 
 


@Component({
  selector: 'app-super-admin-dashboard',
  imports: [MatCardModule, MatButtonModule, MatIcon, MatNavList, MatTableModule, MatSelectModule,MatSidenav,NgClass, MatSidenavModule,MatGridListModule,    ],
  templateUrl: './super-admin-dashboard.component.html',
  styleUrl:'./super-admin-dashboard.component.css'
})
export class SuperAdminDashboardComponent implements AfterViewInit {
  @ViewChild('barChart') chartRef!: ElementRef;

  chart: any;
 


  ngAfterViewInit() {

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [
          {
            data:[60,45,80,55,95,70,65],
            backgroundColor: '#7f7b2f',
            borderRadius: 6,
            barThickness: 40
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },

        scales: {

          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#888'
            }
          },

          y: {
            display: false,
            grid: {
              display: false
            }
          }

        }
      }
    });

  }


// Table data
   displayedColumns: string[] = [ 'user','role','status','action'];
  users = [
    {
      initials:'JD',
      name:'Jane Doe',
      email:'jane@hydofarm.com',
      role:'Farm Manager',
      access:'3 Locations',
      status: 'ACTIVE',
    },

   {
    initials:'RK',
    name:'Robert King',
    email:'r.king@agrotech.io',
    role:'Technician',
    access:'12 Locations',
    status:'PENDING'
  },
  {
    initials:'SL',
    name:'Sarah Lane',
    email:'sarah@ecogrow.net',
    role:'Analyst',
    access:'Global',
    status:'ACTIVE'
  }
];
 

}
