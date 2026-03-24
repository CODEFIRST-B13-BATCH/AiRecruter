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
