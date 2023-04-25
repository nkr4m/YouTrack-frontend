import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectBuilderComponent } from './project-builder.component';
import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';

const routes: Routes = [
  { path: '', component: ProjectBuilderComponent, children:[
    {
      path:'', redirectTo:'view-all'
    },
    {
      path:'view-all', component:ViewAllProjectsComponent
    },
    {
      path:'create-project', component:CreateProjectComponent
    }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectBuilderRoutingModule { }
