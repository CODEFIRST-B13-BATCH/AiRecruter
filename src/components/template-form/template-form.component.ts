import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {

  // There are 2 types of forms : 
  // 1. template driven
  // 2. Reactive form
  name: any = '';
  password: any = '';

  onSubmit(form: any) {
    console.log(form);
  }
}
