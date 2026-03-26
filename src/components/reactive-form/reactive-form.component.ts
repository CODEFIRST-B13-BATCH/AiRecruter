import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';
import { delay, of, Subject, Subscription, takeUntil, toArray } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  // Reactive form.

  loginForm:any;
  tableData: any;
  subscription = new Subject<any>();

  constructor(private formBuilder: FormBuilder, private commonService: CommonService) {
    this.loginForm = this.formBuilder.group({
      name : ['', [Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required,  Validators.minLength(5)]]
    });
  }
  
  get loginFormControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.commonService.getUserData().pipe(takeUntil(this.subscription)).subscribe((response)=>{
     const result =  Object(response).map((res:any)=> res.id === 7);
      console.log(result);
      this.tableData = response;
      of('delay code').pipe(delay(3000)).subscribe((data)=>{
      console.log(response);
      })
    });
  }

  onSubmit(fr:any) {
    if(fr.value.valid) {
    console.log(fr.value);
    }
  }
}
