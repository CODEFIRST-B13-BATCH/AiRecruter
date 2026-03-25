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

    // {
    //     path: 'crops-management',
    //     loadComponent:() => import('../app/components/crops1/crops/crops.component').then( (m) => m.CropsComponent),},

    // {
    //     path: '',
    // },

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
