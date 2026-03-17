import { Routes } from '@angular/router';

export const routes: Routes = [
    { path : '', loadComponent: () => import('../components/template-form/template-form.component').then(m => m.TemplateFormComponent) },
    { path : 'data-binding', loadComponent: () => import('../components/data-binding/data-binding.component').then(m => m.DataBindingComponent) },
    { path : 'directive', loadComponent: () => import('../components/directive/directive.component').then(m => m.DirectiveComponent) },
    { path : 'intercomponent-communication', loadComponent: () => import('../components/parent/parent.component').then(m => m.ParentComponent) },
];
