import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { CommonModule } from '@angular/common';
import { concatMap, delay, forkJoin, from, mergeMap, of, Subject, Subscription, takeUntil, toArray } from 'rxjs';
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
    // this.commonService.getUserData().pipe(takeUntil(this.subscription)).subscribe((response)=>{
    //  const result =  Object(response).map((res:any)=> res.id === 7);
    //   console.log(result);
    //   this.tableData = response;
    //   of('delay code').pipe(delay(3000)).subscribe((data)=>{
    //   console.log(response);
    //   })
    // });
    const userIds = [1, 2, 3, 4];
    // RxJs mergeMap
    // from(userIds).pipe(mergeMap(userIds=>this.commonService.getUserData(userIds))).subscribe((resp)=>{
    //   console.log("MergeMap result : ",resp);
    // });

        // RxJs concatMap
    // from(userIds).pipe(concatMap(userIds=>this.commonService.getUserData(userIds))).subscribe((resp)=>{
    //   console.log("concatMap result : ",resp);
    // });

    const reqUser = this.commonService.getUserData(userIds);
    const reqData = this.commonService.getPostData(userIds);

    forkJoin([reqUser,reqData]).subscribe(([result1, result2])=>{
      console.log("User data :=>", result1);
      console.log("Post data :=>", result2);
    })

  }

  onSubmit(fr:any) {
    if(fr.value.valid) {
    console.log(fr.value);
    }
  }
}
