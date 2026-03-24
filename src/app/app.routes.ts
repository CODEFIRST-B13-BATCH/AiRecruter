import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { RegisterComponent } from '../component/register/register.component';
import { LayoutComponent } from '../component/layout/layout.component';
import { SensorsComponent } from '../component/sensors/sensors.component';

export const routes: Routes = [
    // {
    //     path: 'superAdmindashboard',
    //     loadComponent: () =>
    //         import('../app/components/super-admin-dashboard/super-admin-dashboard.component').then(
    //             (m) => m.SuperAdminDashboardComponent,
    //         ),
    // },

        { path: '', component: LoginComponent },        // default page
       { path: 'register', component: RegisterComponent },
    {
        path:'app', 
        component:LayoutComponent, 
        children:[
            {
                 path: 'crops-health',loadComponent:() => import('./components/crop-health/crop-health.component').then( (m) => m.CropHealthComponent),
        },
        {
            path: 'sensors',component:SensorsComponent
        },
    ]
        
     },


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
