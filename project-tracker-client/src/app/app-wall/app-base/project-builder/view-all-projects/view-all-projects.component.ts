import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollabService } from 'src/app/app-wall/services/collab.service';
import { ProjectService } from 'src/app/app-wall/services/project.service';

@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrls: ['./view-all-projects.component.css']
})
export class ViewAllProjectsComponent implements OnInit {
  ProjectList:any;
  CollabProjectList:any;
  userId:any;
  ticketInfo:any;
  noOwnedFlag:any = false;
  noCollabFlag:any = false;

  constructor(private service:ProjectService, private router:Router, private collabService:CollabService) { }

  ngOnInit(): void {

    this.fetchProjectList();
    this.fetchCollabProjectList();
  }

  fetchProjectList(){
    this.userId = sessionStorage.getItem("username");
    this.service.fetchProjects(this.userId).subscribe(
      (data)=>{
        this.ProjectList = data;
        if(Object.keys(data).length == 0){
          this.noOwnedFlag = true;
        }
      },
      (error)=>{

      }
    )
  }


  fetchCollabProjectList(){
    this.userId = sessionStorage.getItem("username");
    this.collabService.fetchCollabProjects(this.userId).subscribe(
      (data)=>{
        this.CollabProjectList = data;
        if(Object.keys(data).length == 0){
          this.noCollabFlag = true;
        }
        
        console.log("CollabProjectList", data)
      },
      (error)=>{

      }
    )
  }

  viewProject(id:any){
    // console.log(id);

    this.service.fetchTickets(id).subscribe(
      (data)=>{
        console.log(id);
        console.log('Tickets: ', data);
        this.ticketInfo = data;
        sessionStorage.setItem("ticketInfo", JSON.stringify(this.ticketInfo));
        this.router.navigate(["/app-base/project-base"]);
      },
      (error)=>{

      }
    )


  }

}
