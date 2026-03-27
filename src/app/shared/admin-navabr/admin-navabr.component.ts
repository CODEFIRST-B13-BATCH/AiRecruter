import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatNavList } from "@angular/material/list";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
 import { SuperAdminDashboardComponent } from "../../components/admin/super-admin-dashboard/super-admin-dashboard.component";

@Component({
  selector: 'app-admin-navabr',
  standalone:true,
  imports: [MatIcon, MatNavList, MatSidenav, MatSidenavContainer, MatSidenavContent, SuperAdminDashboardComponent],
  templateUrl: './admin-navabr.component.html',
  styleUrl: './admin-navabr.component.css'
})
export class AdminNavabrComponent {
 

}
