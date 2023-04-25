import { Component, OnInit } from '@angular/core';
import { CollabService } from '../../services/collab.service';

@Component({
  selector: 'app-notification-center',
  templateUrl: './notification-center.component.html',
  styleUrls: ['./notification-center.component.css']
})
export class NotificationCenterComponent implements OnInit {
  listInvites:any;
  constructor(private service:CollabService) { }

  ngOnInit(): void {
    this.fetchInvites();
  }

  fetchInvites(){
    const userEmail = sessionStorage.getItem('username');
    
    this.service.viewInvites(userEmail).subscribe(
      (data)=>{
        this.listInvites = data;
        console.log(this.listInvites);
      },
      (error)=>{

      }
    )
  }

  acceptInvite(collabId){
    this.service.actionInvite(collabId, "A").subscribe(
      (data)=>{
        this.fetchInvites();
      },
      (error)=>{

      }
    )
  }

  rejectInvite(collabId){
    this.service.actionInvite(collabId, "R").subscribe(
      (data)=>{
        this.fetchInvites()
      },
      (error)=>{

      }
    )
  }

}
