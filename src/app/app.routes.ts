import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'crops',loadComponent:()=>import('../crop-health/crop-health.component').then(m=>m.CropHealthComponent)},
];
