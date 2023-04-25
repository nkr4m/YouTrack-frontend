import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWallRoutingModule } from './app-wall-routing.module';
import { AppWallComponent } from './app-wall.component';
import { AppLandingComponent } from './app-landing/app-landing.component';

// material.io
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './commons/not-found/not-found.component';




@NgModule({
  declarations: [
    AppWallComponent,
    AppLandingComponent,
    NotFoundComponent,

  ],
  imports: [
    CommonModule,
    AppWallRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AppWallModule { }
