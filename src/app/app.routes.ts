import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'alerts', loadComponent:() => import('./alert-notification/alert-notification.component'). then(m => m.AlertNotificationComponent)},
];
