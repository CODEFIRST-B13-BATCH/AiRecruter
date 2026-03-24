import { Component, model, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { RegisterComponent } from '../register/register.component';
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


  password: any = "";
  phoneNo: any = "";

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  //password**************************
  hide = signal(true);
  fetchedData: any;

  constructor(private router : Router) {}
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  registrationPage() {
    this.router.navigate(["/register"])
  }


  onSubmit(form: any) {
    let enteredNumber = this.phoneNo;
    let enteredPassword = this.password;

    let checkExistingNo=JSON.parse(localStorage.getItem("information") || '[]');

    if (enteredNumber && enteredPassword) {

      let fetchedData = JSON.parse(localStorage.getItem("information") || '[]');
      let valiDation = fetchedData.find((fetchedData: any) =>
        String(enteredNumber) ===String(fetchedData.phoneNo) && String(enteredPassword) === String(fetchedData.password)
      )

      if (valiDation) {
 
        
                this.router.navigate(['/app/crops-health']);
                // ,{queryParams:{
                //   name:valiDation.fullName,
                //   role:valiDation.role
                // }}); -----using query params
                //using sessition storage
                sessionStorage.setItem("currentUserInfo",JSON.stringify(valiDation));
                alert("logged in successfully");
      } else {
        alert("enter valid credentials");
      }
    }

    else{
      alert("enter phone number and password");
    }
  }

}

