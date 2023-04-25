import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectBuilderRoutingModule } from './project-builder-routing.module';
import { ProjectBuilderComponent } from './project-builder.component';
import { ViewAllProjectsComponent } from './view-all-projects/view-all-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';

import {TuiTableModule} from '@taiga-ui/addon-table';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiHostedDropdownModule} from '@taiga-ui/core';
import {TuiReorderModule} from '@taiga-ui/addon-table';
import {TuiLoaderModule} from '@taiga-ui/core';
import {TuiTablePaginationModule} from '@taiga-ui/addon-table';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    ProjectBuilderComponent,
    ViewAllProjectsComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectBuilderRoutingModule,
    TuiTableModule,
    TuiTextfieldControllerModule,
    FormsModule,
    ReactiveFormsModule,
    TuiHostedDropdownModule,
    TuiReorderModule,
    TuiLoaderModule,
    TuiTablePaginationModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectBuilderModule { }
