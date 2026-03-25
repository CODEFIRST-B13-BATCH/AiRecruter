import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: 'superAdmindashboard',
    //     loadComponent: () =>
    //         import('../app/components/super-admin-dashboard/super-admin-dashboard.component').then(
    //             (m) => m.SuperAdminDashboardComponent,
    //         ),
    // },

    {
         path: 'dashboard',loadComponent:() => import('../app/main-dashboard/main-dashboard.component').then( (m) => m.MainDashboardComponent),
     },
    {
         path: 'crops-health',loadComponent:() => import('../app/components/crop-health/crop-health.component').then( (m) => m.CropHealthComponent),
     },

    // {
    //     path: 'crops-management',
    // },

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
