import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input () userName : string = "";

  @Output () userNameChange : EventEmitter<string> = new EventEmitter<string>();

  changeUserName(){
    this.userName = "Codefirst B13";
    this.userNameChange.emit(this.userName);
  }

  ngOnchanges(){
    console.log("User name changed to : " + this.userName);
  }

}
