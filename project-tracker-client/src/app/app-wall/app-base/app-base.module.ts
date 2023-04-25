import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBaseRoutingModule } from './app-base-routing.module';
import { AppBaseComponent } from './app-base.component';

// material.io
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

// taiga
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/core';

import {MatTableModule} from '@angular/material/table';
import { NotificationCenterComponent } from './notification-center/notification-center.component';



@NgModule({
  declarations: [
    AppBaseComponent,
    NotificationCenterComponent
  ],
  imports: [
    CommonModule,
    AppBaseRoutingModule,
    MatToolbarModule,
    MatIconModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiButtonModule,
    MatTableModule
  ]
})
export class AppBaseModule { }
