import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserAccountComponent } from './user-account.component';

const routes: Routes = [
  { path: '', component: UserAccountComponent, children:[
    {
      path:'', redirectTo:'profile'
    },
    {
      path:'profile', component:ProfileComponent
    }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountRoutingModule { }
