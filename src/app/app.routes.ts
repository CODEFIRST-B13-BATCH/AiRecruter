import { Routes } from '@angular/router';
import { MainDashboardComponent } from '../component/main-dashboard/main-dashboard.component';

export const routes: Routes = [
  { path : '', loadComponent: () => import('../component/main-dashboard/main-dashboard.component').then(m => m.MainDashboardComponent) },
  { path: 'dashboard', component: MainDashboardComponent },
];
