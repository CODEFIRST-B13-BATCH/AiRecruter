import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-alert-notification',
  imports: [CommonModule, 
            MatCardModule,
            MatButtonModule,
            MatIconModule, 
            MatListModule,
            MatTableModule,
            MatSelectModule,
            MatFormFieldModule,
            MatProgressBarModule],
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.css'
})
export class AlertNotificationComponent {

  dataSource = [
    { type: 'pH Imbalance (High)', source: 'Greenhouse 1: NFT System A', severity: 'CRITICAL', time: 'Today, 09:42 AM', status: 'Active' },
    { type: 'Temperature Warning', source: 'Greenhouse 2: Zone B-12', severity: 'WARNING', time: 'Today, 08:15 AM', status: 'Acknowledged' },
    { type: 'Scheduled Maintenance', source: 'Global: Cloud Hub 1', severity: 'INFO', time: 'Yesterday, 10:00 PM', status: 'Resolved' }
  ];
  displayedColumns: string[] = ['type', 'severity', 'time', 'status', 'actions'];

  notifications = [
    {
      icon: 'person', // Material Icon name
      title: 'Manager Alex',
      action: 'marked "Water Level Low" as resolved.',
      time: '15 minutes ago'
    },
    {
      icon: 'history', // Material Icon name
      title: 'Automatic EC Calibration',
      action: 'completed successfully for Greenhouse 1.',
      time: '2 hours ago'
    },
    {
      icon: 'settings', // Material Icon name
      title: 'System Update v2.4.0',
      action: 'applied. Check the release notes.',
      time: '5 hours ago'
    }
  ];
}


