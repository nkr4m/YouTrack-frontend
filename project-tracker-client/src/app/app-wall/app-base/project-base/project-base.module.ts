import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectBaseRoutingModule } from './project-base-routing.module';
import { ProjectBaseComponent } from './project-base.component';
import { addTicketDialog, ProjectDashboardComponent, viewTicketDialog } from './project-dashboard/project-dashboard.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {TuiHighlightModule} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {TuiEditorModule} from '@taiga-ui/addon-editor';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';

import { DxCheckBoxModule, DxSchedulerModule } from 'devextreme-angular';

import {TuiAlertModule, TuiRootModule} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CollabComponent } from './collab/collab.component';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    ProjectBaseComponent,
    ProjectDashboardComponent,
    ProjectSettingsComponent,
    addTicketDialog,
    CalendarViewComponent,
    viewTicketDialog,
    CollabComponent
  ],
  imports: [
    CommonModule,
    ProjectBaseRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    TuiHighlightModule,
    TuiInputModule,
    FormsModule,
    TuiEditorModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    DxCheckBoxModule,
    DxSchedulerModule,
    TuiAlertModule,
    TuiRootModule,
    TuiInputDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule




    
  ]
})
export class ProjectBaseModule { }
