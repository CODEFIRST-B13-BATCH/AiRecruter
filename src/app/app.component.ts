import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { AlertNotificationComponent } from './alert-notification/alert-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlertNotificationComponent],
=======
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
>>>>>>> b7ec142e8c2fd19b4d022bd66d413280725e06d4
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {}
=======
export class AppComponent {
  title = 'Hydrogrow';
}
>>>>>>> b7ec142e8c2fd19b4d022bd66d413280725e06d4
