import { Routes } from '@angular/router';

// login
import { LoginComponent } from './components/login/login.component';

 
 

// admin page
 import { RegisterComponent } from './components/register/register.component';
 

export const routes: Routes = [

   {
        path: '',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },

   
 

   

]; 