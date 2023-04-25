import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TuiAlertService } from '@taiga-ui/core';
import { CollabService } from 'src/app/app-wall/services/collab.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.css']
})
export class CollabComponent implements OnInit {
  emailId:any;
  collabList:any;
  constructor(private alert:TuiAlertService, private service:CollabService) { }

  ngOnInit(): void {
    this.fetchCollabsForProject();
  }

  sendInvite(){

    const projectDtls = JSON.parse(sessionStorage.getItem("ticketInfo"));
    const ownerDtls = sessionStorage.getItem("username");
    console.log(this.emailId)

    if(this.emailId == undefined){

      this.alert.open('Empty invite cannot be sent!').subscribe({
        complete: () => {
          console.log('Notification is closed');
        },
      });
      return;

    }

    let data = {
      'projectId': projectDtls.ProjectId,
      'projectName': projectDtls.ProjectName,
      'sender':ownerDtls,
      'userEmailId': this.emailId,
      'role': "editor"
    }

    this.service.sendInvite(data).subscribe(
      (data)=>{
        this.alert.open('An Invite is sent!').subscribe({
          complete: () => {
            console.log('Notification is closed');
          },
        });
        //this.emailId = "";
        return;
        
      },
      (error)=>{
        this.alert.open('Invite not sent, Please try again later').subscribe({
          complete: () => {
            console.log('Notification is closed');
          },
        });
        return;
      }
    )





    

  }

  fetchCollabsForProject(){
    const projDtls = JSON.parse(sessionStorage.getItem("ticketInfo"));
    this.service.fetchCollabProjectsUser(projDtls.ProjectId).subscribe(
      (data)=>{
        this.collabList = data;
        console.log("collab list",data)

      },
      (error)=>{

      }
    )

  }

}
