import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-crop-health',
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './crop-health.component.html',
  styleUrl: './crop-health.component.css'
})
export class CropHealthComponent {
  scanId = 'SCAN_ID: 99421-B';
}
