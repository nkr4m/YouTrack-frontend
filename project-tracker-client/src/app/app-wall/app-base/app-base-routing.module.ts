import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBaseComponent } from './app-base.component';
import { NotificationCenterComponent } from './notification-center/notification-center.component';

const routes: Routes = [
  {
    path: '', component: AppBaseComponent, children: [
      {
        path: '', redirectTo: 'project-builder'
      },
      { path: 'project-builder', loadChildren: () => import('./project-builder/project-builder.module').then(m => m.ProjectBuilderModule) },
      { path: 'user-account', loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule) },
      { path: 'project-base', loadChildren: () => import('./project-base/project-base.module').then(m => m.ProjectBaseModule) },
      {
        path:'notification', component:NotificationCenterComponent
      }
    ]
  },
  { path: 'work-board', loadChildren: () => import('./work-board/work-board.module').then(m => m.WorkBoardModule) },
  { path: 'team-builder', loadChildren: () => import('./team-builder/team-builder.module').then(m => m.TeamBuilderModule) },
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBaseRoutingModule { }
