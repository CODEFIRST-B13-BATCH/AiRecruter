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
<<<<<<< HEAD:src/app/shared/navbar/navbar.component.ts
 import { MatSelect, MatOption } from "@angular/material/select";
 @Component({
=======
import { CommonModule } from '@angular/common';
import { CropsComponent } from '../../components/crops/crops/crops.component';
import { MatSelect, MatOption } from "@angular/material/select";


@Component({
>>>>>>> af0144e5e0cf9912308cd6ef5b095f1d012ecf3b:src/shared/navbar/navbar.component.ts
>>>>>>> b0af7bc5eed83f0ad6e418f86df3e44e260fafda:src/shared/navbar/navbar.component.ts
  selector: 'app-navbar',
  // standalone:true,   // this is added
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterOutlet, // this is changed
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatExpansionModule,
<<<<<<< HEAD:src/app/shared/navbar/navbar.component.ts
=======
<<<<<<< HEAD:src/app/shared/navbar/navbar.component.ts
>>>>>>> b0af7bc5eed83f0ad6e418f86df3e44e260fafda:src/shared/navbar/navbar.component.ts
    MatMenuModule,
    MatSelect,
    MatOption,
 
     
<<<<<<< HEAD:src/app/shared/navbar/navbar.component.ts
=======
=======
    MatMenuModule
>>>>>>> af0144e5e0cf9912308cd6ef5b095f1d012ecf3b:src/shared/navbar/navbar.component.ts
>>>>>>> b0af7bc5eed83f0ad6e418f86df3e44e260fafda:src/shared/navbar/navbar.component.ts
],
    
 

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  showCropsMenu = false;


  isCollapsed = true;
  userName: string = "";
  userRole:  string = "";
  

  constructor(private router: Router) { }

  onCropChange(value: string) {
    if (value === 'health') {
      this.router.navigate(['/owner/crops-health']);
    } else if (value === 'management') {
      this.router.navigate(['/owner/crops-management']);
    }
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

    ngOnInit() {
    const data = sessionStorage.getItem('currentUser');

    if (data) {
      const activeUser = JSON.parse(data);

      this.userName = activeUser?.fullName || '';
      this.userRole = activeUser?.role || '';

      console.log("User:", activeUser);
    } else {
      console.log("No user found in sessionStorage");
    }
  }

  
}
