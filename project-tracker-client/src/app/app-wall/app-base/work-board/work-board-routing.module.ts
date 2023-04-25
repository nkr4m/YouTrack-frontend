import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkBoardComponent } from './work-board.component';

const routes: Routes = [{ path: '', component: WorkBoardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkBoardRoutingModule { }
