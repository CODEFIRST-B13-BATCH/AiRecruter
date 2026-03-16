import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from '../components/template-form/template-form.component';
import { DirectiveComponent } from "../components/directive/directive.component";
import { DataBindingComponent } from "../components/data-binding/data-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateFormComponent, DirectiveComponent, DataBindingComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hydroGrow';
}
