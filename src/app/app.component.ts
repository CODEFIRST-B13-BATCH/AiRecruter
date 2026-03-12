import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { DirectiveComponent } from "../components/directive/directive.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateFormComponent, DirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hydroGrow';
}
