import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { WorkerNavbarComponent } from "./shared/worker-navbar/worker-navbar.component";
=======
>>>>>>> af0144e5e0cf9912308cd6ef5b095f1d012ecf3b
// import { SuperAdminDashboardComponent } from "./components/super-admin-dashboard/super-admin-dashboard.component";
 


@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [RouterOutlet, NavbarComponent, WorkerNavbarComponent],
=======
  imports: [RouterOutlet],
>>>>>>> af0144e5e0cf9912308cd6ef5b095f1d012ecf3b
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hydrogrow';
}
