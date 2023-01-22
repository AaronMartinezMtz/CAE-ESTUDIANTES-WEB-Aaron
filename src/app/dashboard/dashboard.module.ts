import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgQrScannerModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
