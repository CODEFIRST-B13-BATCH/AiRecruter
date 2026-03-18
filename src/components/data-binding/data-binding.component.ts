import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  constructor(private router: Router) { }
  // Data binding properties
  // 1. Interpolation
    name: string = 'Angular';
  // 2. Property Binding
    isDisabled: boolean = true;
  // 3. Event Binding
    login(fromData:any) {
      // localStorage.getItem('token');
      const parsedData = JSON.parse(localStorage.getItem('user') || '{}');
      if(fromData.username === parsedData.username && fromData.password === parsedData.password){ 
        
        this.router.navigate(['/dashboard']);
      } else {
        // Handle invalid credentials
        alert('Invalid username or password!');
        this.router.navigate(['/']);
      }

      // alert('Button clicked!');
    }
  // 4. Two-way Binding



}
