import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthBaseRoutingModule } from './auth-base-routing.module';
import { AuthBaseComponent } from './auth-base.component';

// material.io
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AuthBaseComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthBaseRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthBaseModule { }
