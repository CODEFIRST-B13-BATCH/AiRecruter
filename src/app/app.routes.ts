import { Routes } from '@angular/router';

// login
import { LoginComponent } from './components/auth/login/login.component';

 
 

// admin page
 import { RegisterComponent } from './components/auth/register/register.component';
 

export const routes: Routes = [

   {
        path: '',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },

   
 

   

]; 