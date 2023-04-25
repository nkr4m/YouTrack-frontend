import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingComponent } from './app-landing/app-landing.component';

import { AppWallComponent } from './app-wall.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: AppWallComponent, children: [
      {
        path: '', redirectTo: 'app-landing'
      },
      {
        path: 'app-landing', component: AppLandingComponent
      },
      { path: 'app-base', canActivate:[AuthGuard] ,loadChildren: () => import('../app-wall/app-base/app-base.module').then(m => m.AppBaseModule) },
      { path: 'auth-base', loadChildren: () => import('../app-wall/auth-base/auth-base.module').then(m => m.AuthBaseModule) },
      {
        path:'404', component:NotFoundComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppWallRoutingModule { }
