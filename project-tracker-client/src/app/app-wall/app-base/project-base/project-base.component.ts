import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { timeStamp } from 'console';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-base',
  templateUrl: './project-base.component.html',
  styleUrls: ['./project-base.component.css']
})
export class ProjectBaseComponent implements OnInit {
  model:any;
  title:any = "";
  code:any="";
  employeeData:any

  ngOnInit(): void {
    var obj = JSON.parse(sessionStorage.getItem("ticketInfo"));
    this.title = obj.ProjectName;
    this.code = obj.ProjectName;
    if(obj == null){
      this.router.navigate(["/app-base/"]);
    }
    // this.mobileQuery.matches ? this.title = "" : this.title = "Leave Tracking System"
    
    // setTimeout(() => {
    //   this.employeeData = JSON.parse(sessionStorage.getItem("employee-data"));
    // }, 4000);
  }

  mobileQuery: MediaQueryList;



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
