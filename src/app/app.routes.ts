import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    // {
    //     path: 'superAdmindashboard',
    //     loadComponent: () =>
    //         import('../app/components/super-admin-dashboard/super-admin-dashboard.component').then(
    //             (m) => m.SuperAdminDashboardComponent,
    //         ),
    // },
    

    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    //  {
    //     path: '',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent)
    // },

    //  {
    //     path: 'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent)
    // },

    {
         path: 'crops-health',loadComponent:() => import('../app/components/crop-health/crop-health.component').then( (m) => m.CropHealthComponent),
     },

    {
        path: 'main-dashboard',
        loadComponent:() => import('../app/main-dashboard/main-dashboard.component').then( (m) => m.MainDashboardComponent),},

    {
        path: 'alerts',loadComponent:() => import('../app/components/alert-notification/alert-notification.component').then( (m) => m.AlertNotificationComponent)
    },

    // {
    //     path: '',
    // },
    // {
    //     path: '',
    // },
    // {
    //     path: '',
    // }

];
