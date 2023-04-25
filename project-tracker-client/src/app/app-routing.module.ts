import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./app-wall/app-wall.module').then(m => m.AppWallModule) },
  { path: 'app-auth', loadChildren: () => import('./app-wall/auth-base/auth-base.module').then(m => m.AuthBaseModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
