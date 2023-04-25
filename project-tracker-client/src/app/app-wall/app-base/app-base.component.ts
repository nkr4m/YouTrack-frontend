import { Component, OnInit } from '@angular/core';

import {ChangeDetectionStrategy, Inject} from '@angular/core';
import { Router } from '@angular/router';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css']
})
export class AppBaseComponent implements OnInit {

  open = false;
  open1 = false;
  open2 = false;
  open3 = false;
  open9 = false;

  recentWork:any;
 
  readonly arrow = TUI_ARROW;



  constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean, private router:Router) { }

  ngOnInit(): void {

    this.recentWork = JSON.parse(sessionStorage.getItem("ticketInfo")).ProjectName;
    
    
  }

  navProj(){
    this.router.navigateByUrl("app-base/project-base/project-dashboard")
  }

  signOut(){
    console.log("sign-out")
    sessionStorage.clear();
    this.router.navigateByUrl("/")
  }

}
