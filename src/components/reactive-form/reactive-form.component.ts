import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // Reactive form.

  loginForm:any;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required,  Validators.minLength(5)]]
    });
  }
  
  get loginFormControls() {
    return this.loginForm.controls;
  }

  onSubmit(fr:any) {
    if(fr.value.valid) {
    console.log(fr.value);
    }
  }
}
