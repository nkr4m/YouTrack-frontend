import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkBoardRoutingModule } from './work-board-routing.module';
import { WorkBoardComponent } from './work-board.component';


@NgModule({
  declarations: [
    WorkBoardComponent
  ],
  imports: [
    CommonModule,
    WorkBoardRoutingModule
  ]
})
export class WorkBoardModule { }
