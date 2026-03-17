import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface AnalysisRecord {
  thumbnailUrl: string;
  cropType: string;
  scanDate: string;
  status: string;
  statusType: 'healthy' | 'issue';
}

@Component({
  selector: 'app-crop-health',
  imports: [MatButtonModule,MatCardModule,MatProgressBarModule,MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './crop-health.component.html',
  styleUrl: './crop-health.component.css'
})
export class CropHealthComponent {
  scanId = 'SCAN_ID: 99421-B';
  
  leafImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbrhZnKj9UZBcpki7x_k0b0H46pNZgbjZpablvs0qwVKbZJ2mXIQZJVbMP7Iikp500IwFeyN9PsxHkISdIscoqbTPyEek3_8BXMELu3g0q59UoHkyYbc2PU-ogHEoIxt0Qc4tPaUBYeAVv1oTmSUa1CsceeMjfkhs5TYhUfnN1GnyjrODLTUV0D878m16k58-76FUNUsXXyhjdMYCX5-f2sTvox0knp07cMeloKwe9CQpZ5qb5hrwoWGSLWdyV8QXYnG4wzVsxuE6R';

  diagnosisLabel = 'AI Diagnosis';
  diseaseName = 'Early Blight Detected';
  confidenceScore = 94;
  diagnosisColor = '#dc2626';
  diagnosisStatus: 'healthy' | 'warning' | 'danger' = 'danger';

  recommendedActions = [
    'Prune affected leaves immediately to prevent spore dispersal.',
    'Adjust nutrient balance (increase Potassium levels).',
    'Apply copper-based fungicide in the early morning.'
  ];

    recentAnalyses: AnalysisRecord[] = [
    {
      thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRAOi3pGcKN0NDGDOBD4Pv-uR467ZVNpa9etN3TFk3GrXdKF44pXPniftYpVbkLHA_HZqf-nLW0JxVJmD72LQxIeEwBpdaI3ZteKpz_lvjXI0Ig9o5-Ib013nipRMPRqthD1DL2B6NHZoFE20EyDkcEqEyRpPgS2eJ_Nt0Nt957c1H5HQCLmC8-NOr55WBsGnwFIUZC8hO5DRmTnIf-DUz7n22jTsNQ8R8dZ7ik_c4YH-kOZHmIysKJ0vjxFsdQp1HoH3MdnTES3Fv',
      cropType: 'Potato',
      scanDate: 'Oct 24, 2023',
      status: 'Healthy',
      statusType: 'healthy'
    },
    {
      thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4DKaFpxVuoIX1uwcowD0ydk47QIhprrdtta7H8oBsKytqy-1GHnY2VGDeAScgwWpSs4egjNkpQ4Pu7dldeSj3dqBqFGhqCi6zsdv0OQoo6dpjg-7k7qf56qJxASLEz-5g_jDlob-ZLtyI9eIUaPpKQOQHSw8Pem8gq5ppmOEV5HVnZiJ7e3GuJicq8Slw6WcEwvzD2QPSU8-K16PyTb1o6Xnw7ahbLvY7-qhX3t5q-xHFYDTCw67noLXRFdHAxJuLNuI4Gr_S4rQ',
      cropType: 'Corn',
      scanDate: 'Oct 22, 2023',
      status: 'Issue Detected',
      statusType: 'issue'
    },
    {
      thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-8Nldz1Q28i7zkj2L4jMY791XRznX80RVqE7USr0xVGOnvpWHSLljGZYlqgo2R5Qw5ZX4rYjIAoVs1ZUhcaVWUikhHdhkErd0HqorYAfN3sncHPrUiwddJsBmtZUUGl8AWkKjiCCCbKINzhVP1Y60pZzjl3K_sLNtl6W52yemlUlJ-ydhsfBwV1HucniDpeDaI80xAxE5Lw6-0oLvoSZ3s1DYjWc1p14AemCPZCjY8FzSR-GgoYw99ZA6dcOwkFK3BXy-uM7gMacF' ,
      cropType: 'Pepper',
      scanDate: 'Oct 20, 2023',
      status: 'Healthy',
      statusType: 'healthy'
    }
  ];

  displayedColumns: string[] = ['thumbnail', 'cropType', 'scanDate', 'status', 'action'];


  
uploadTitle = 'New Analysis';

// bot
chatMessages = [
  {
    sender: 'bot',
    text: 'Hello! I noticed you just scanned a tomato leaf. Would you like a 7-day irrigation schedule to help with the recovery?'
  },
  {
    sender: 'user',
    text: 'Yes, please. Also, suggest organic fungicides.'
  },
  {
    sender: 'bot',
    text: 'For organic control of Early Blight, I recommend copper soap or Serenade Garden. Ensure you apply every 7-10 days.'
  }
];
}

