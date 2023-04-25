import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAccountComponent } from './user-account.component';
import { ProfileComponent } from './profile/profile.component';

import {TuiAvatarModule} from '@taiga-ui/kit';
import {TuiTooltipModule, TuiHintModule} from '@taiga-ui/core';



@NgModule({
  declarations: [
    UserAccountComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule,
    TuiAvatarModule,
    TuiTooltipModule,
    TuiHintModule
  ]
})
export class UserAccountModule { }
