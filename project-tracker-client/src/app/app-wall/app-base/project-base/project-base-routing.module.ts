import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CollabComponent } from './collab/collab.component';
import { ProjectBaseComponent } from './project-base.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';

const routes: Routes = [
  { path: '', component: ProjectBaseComponent, children:[
    {
      path:'', redirectTo:'project-dashboard'
    },
    {
      path:'project-dashboard', component:ProjectDashboardComponent
    },
    {
      path:'project-settings', component:ProjectSettingsComponent
    },
    {
      path:'calendar-view', component:CalendarViewComponent
    },
    {
      path:'collab', component:CollabComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectBaseRoutingModule { }
