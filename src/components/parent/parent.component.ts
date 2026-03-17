import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  // intercomponet communication : 
  // 1. @Input() : used to pass data from parent to child component
  userName : string = "Codefirst";
  // 2. @Output() : used to pass data from child to parent component
  // 3. @viewChild() : used to access child component from parent component 

  @ViewChild (ChildComponent) childComponent : ChildComponent | undefined;
  // 4. Service : used to share data between components

  userNameChange(newUserName : string){
    this.userName = newUserName;
  }
  
  ngAfterViewInit(){
    this.childComponent?.changeUserName();
  }
}
