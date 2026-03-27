import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AdminNavabrComponent } from "./shared/admin-navabr/admin-navabr.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { WorkerNavbarComponent } from "./shared/worker-navbar/worker-navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AdminNavabrComponent, NavbarComponent, WorkerNavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  userRole: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateUserRole();
      }
    });

    this.updateUserRole();
  }

  updateUserRole() {
    const user = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    this.userRole = user?.role || null;

    // ONLY redirect if the user is at the root '/' or 'login'
    // This allows them to visit /owner/alerts without being kicked back to dashboard
    if (user && (this.router.url === '/' || this.router.url === '/login')) {
      this.redirectByRole(user.role);
    }
  }

  redirectByRole(role: string) {
    const roleRoutes: any = {
      'admin': '/admin/super-admin',
      'farm-owner': '/owner/dashboard',
      'farm-worker': '/worker/daily-task'
    };
    this.router.navigate([roleRoutes[role]]);
  }

  // Use this in your HTML to hide Navbars on Login/Register pages
  showNav(): boolean {
    const publicPages = ['/', '/login', '/register'];
    return this.userRole !== null && !publicPages.includes(this.router.url);
  }
}