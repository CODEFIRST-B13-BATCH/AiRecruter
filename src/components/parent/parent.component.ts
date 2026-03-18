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

  ngOnInit() {
    console.log("Parent component initialized");
  }

  ngAfterViewInit(){
    this.childComponent?.changeUserName();
  }

  // Angular life cycle hook :
  // 1. ngOnInit() : called after the component is initialized
  // 2. ngOnChanges() : called when any data-bound property of a directive changes
  // 3. ngDoCheck() : called during every change detection run, immediately after ngOnChanges() and ngOnInit()
  // 4. ngAfterContentInit() : called after content (ng-content) has been projected into view
  // 5. ngAfterContentChecked() : called after every check of projected content
  // 6. ngAfterViewInit() : called after a component's view, and its child views, have been initialized
  // 7. ngAfterViewChecked() : called after every check of a component's view, and its child views
  // 8. ngOnDestroy() : called just before Angular destroys the directive/component
}
