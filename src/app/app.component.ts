import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashbordComponent } from '../../component/main-dashbord/main-dashbord.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MainDashbordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AiRecruter';
}
