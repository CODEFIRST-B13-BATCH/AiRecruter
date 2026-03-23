import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CustPipePipe } from "../../shared/cust-pipe.pipe";

@Component({
  selector: 'app-data-binding',
  imports: [CommonModule, CustPipePipe],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  constructor(private router: Router) { }
  // Data binding properties
  // 1. Interpolation
    name: string = 'Angular';
    currency=100;
    currentDate = new Date();
  // 2. Property Binding
    isDisabled: boolean = true;
  // 3. Event Binding
    login(formData:any) {
      // localStorage.getItem('token');
      if(formData.value) {
        this.router.navigate(['/directive']);
      }

      // const parsedData = JSON.parse(localStorage.getItem('user') || '{}');
      // if(fromData.username === parsedData.username && fromData.password === parsedData.password){ 
        
      // } else {
      //   // Handle invalid credentials
      //   alert('Invalid username or password!');
      //   this.router.navigate(['/']);
      // }

      // alert('Button clicked!');
    }
  // 4. Two-way Binding



}
