import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CropsComponent } from '../components/crops/crops/crops.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CropsComponent,NavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyhydroGrow';
}
