import { Component, model, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatIconModule, MatIconModule, MatDividerModule, MatIconModule, MatCardModule, MatCheckboxModule, FormsModule, MatCardModule,
    MatRadioModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginPage: boolean = true;
  password: any = "";
  phoneNo: any = "";

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router:Router){}


  //password**********
  hide = signal(true);
  fetchedData: any;
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  registrationPage() {
    this.router.navigate(['/register']);
  }



 onSubmit(form: any) {
  let enteredNumber = this.phoneNo;
  let enteredPassword = this.password;

  if (enteredNumber && enteredPassword) {

    let fetchedData = JSON.parse(localStorage.getItem("information") || '[]');

    let valiDation = fetchedData.find((user: any) =>
      enteredNumber === user.phoneNo && enteredPassword === user.password
    );

   if (valiDation) {
  alert("Logged in successfully");

  sessionStorage.setItem("currentUser", JSON.stringify(valiDation));
  sessionStorage.setItem("role", valiDation.role);

  const role = valiDation.role.toLowerCase();

  if (role === 'farmowner') {
    this.router.navigate(['/owner/dashboard']);
  } 
  else if (role === 'farm-worker') {
    this.router.navigate(['/worker/dashboard']);
  } 
  else if (role === 'admin') {
    this.router.navigate(['/admin/dashboard']);
  }

} else {
  alert("Enter valid credentials");
}

console.log("User Role:", valiDation.role);
}
  
 }
}