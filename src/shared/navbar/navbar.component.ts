import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CropsComponent } from '../../components/crops/crops/crops.component';
@Component({
  selector: 'app-navbar',
  imports: [ CommonModule,
    CropsComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatExpansionModule,
    MatMenuModule
],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

 showCropsMenu = false;

  constructor(private router: Router) {}

  openCrops() {
    this.showCropsMenu = !this.showCropsMenu;
    this.router.navigate(['']);
  }
}
