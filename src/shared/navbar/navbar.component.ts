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
<<<<<<< HEAD:src/app/shared/navbar/navbar.component.ts
 import { MatSelect, MatOption } from "@angular/material/select";
 @Component({
=======
import { CommonModule } from '@angular/common';
import { CropsComponent } from '../../components/crops/crops/crops.component';
import { MatSelect, MatOption } from "@angular/material/select";


@Component({
>>>>>>> af0144e5e0cf9912308cd6ef5b095f1d012ecf3b:src/shared/navbar/navbar.component.ts
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
<<<<<<< HEAD:src/app/shared/navbar/navbar.component.ts
    MatMenuModule,
    MatSelect,
    MatOption,
     
=======
    MatMenuModule
>>>>>>> af0144e5e0cf9912308cd6ef5b095f1d012ecf3b:src/shared/navbar/navbar.component.ts
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
