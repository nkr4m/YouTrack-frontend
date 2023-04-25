import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { TuiAlertService } from '@taiga-ui/core';


@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {
  TicketData: any;
  search: any;
  ticketInfo: any;
  constructor(public dialog: MatDialog, private refreshDash: refreshDashboardService, private service: ProjectService) { }

  ngOnInit(): void {


    this.refreshDash.refreshStatus.subscribe(
      msg => {
        if (msg == "true") {
          console.log("refreshing")
          var tik = JSON.parse(sessionStorage.getItem('ticketInfo'))
          console.log(tik)
          this.TicketData = tik.Tickets


        }
      }
    )




    var tik = JSON.parse(sessionStorage.getItem('ticketInfo'))
    this.TicketData = tik.Tickets

  }




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
        let ticketInfo = JSON.parse(sessionStorage.getItem("ticketInfo"));

        ticketInfo.Tickets = this.TicketData;

        sessionStorage.setItem("ticketInfo", JSON.stringify(ticketInfo));
        // console.log(this.TicketData)
        let reqData = {
          projectId: ticketInfo.ProjectId,
          ticketInfo: this.TicketData
        }
        
        this.service.statusUpdater(reqData).subscribe(
          (data)=>{
            // console.log("status updated");

          },
          (error)=>{

          }
        )

    }
  }

  onClickBox() {
    console.log("box clixked")
  }


  openViewTicket(items, nm, desc, rb, cd, ct, sd, ed, tid, cs) {
    console.log('ticket_id',tid)

    this.dialog.open(viewTicketDialog, {
      data: {
        obj: nm,
        st: items.title,
        desc: desc,
        reportedBy: rb,
        createdDate: cd,
        createdTime: ct,
        startDate:sd,
        endDate:ed,
        ticketId:tid,
        currentState:cs
      },
      height: '70%',
      width: '70%'

    });
  }

  openAddTicket(items) {
    this.dialog.open(addTicketDialog, {
      data: {
        ticket_against: items,
      },
      height: '70%',
      width: '70%'

    });
  }


}





@Component({
  selector: 'view-ticket-dialog',
  templateUrl: 'view-ticket-dialog.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class viewTicketDialog {

  startDate:any;
  endDate:any;


  public Editor = ClassicEditor;
  public model = {
    editorData: ""
  };

  readonly testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  val: any;

  constructor(public dialog: MatDialog,private refreshDash: refreshDashboardService,@Inject(MAT_DIALOG_DATA) public data: viewTicketDialog, private service: ProjectService) {
    this.val = data;
    this.model.editorData = this.val.desc
    this.startDate = this.val.startDate;
    this.endDate = this.val.endDate;
  }

  DeleteTicket(){
    let p = JSON.parse(sessionStorage.getItem("ticketInfo"));
    console.log('delete ticketId:', this.val.ticketId)
    this.service.deleteTicket(this.val.ticketId).subscribe(
      (data)=>{

        this.service.fetchTickets(p.ProjectId).subscribe(
          (data) => {
            // console.log(id);
            console.log('Tickets: ', data);
            // this.ticketInfo = data;
            sessionStorage.setItem("ticketInfo", JSON.stringify(data));
            // this.router.navigate(["/app-base/project-base"]);
            this.refreshDash.updateStatus("true");
            this.dialog.closeAll();
          },
          (error) => {
    
          }
        )

      },
      (error)=>{

      }
    )
  }

  UpdateTicket(){
    let p = JSON.parse(sessionStorage.getItem("ticketInfo"));
    let data = {


      description:this.model.editorData,
    
      startDate:this.startDate,
      endDate:this.endDate,
      currentState:this.val.currentState,
    
      
      reportedBy:"",
      assignedTo:""

    }
    console.log('update ticketId:', this.val.ticketId)
    this.service.updateTicket(this.val.ticketId, data).subscribe(
      (data)=>{

        this.service.fetchTickets(p.ProjectId).subscribe(
          (data) => {
            // console.log(id);
            console.log('Tickets: ', data);
            // this.ticketInfo = data;
            sessionStorage.setItem("ticketInfo", JSON.stringify(data));
            // this.router.navigate(["/app-base/project-base"]);
            this.refreshDash.updateStatus("true");
            this.dialog.closeAll();
          },
          (error) => {
    
          }
        )

        

      },
      (error)=>{

      }
    )
  }
}






import { defaultEditorExtensions, TUI_EDITOR_EXTENSIONS } from '@taiga-ui/addon-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {FormControl, FormGroup} from '@angular/forms';
import { Session } from 'inspector';
import { ProjectService } from 'src/app/app-wall/services/project.service';
import { refreshDashboardService } from 'src/app/app-wall/services/shared/refresh-dashboard-service';
import {TuiDay} from '@taiga-ui/cdk';
@Component({
  selector: 'add-ticket-dialog',
  templateUrl: 'add-ticket-dialog.html',
  

  styleUrls: ['./project-dashboard.component.css']
  // providers: [
  //   {
  //     provide: TUI_EDITOR_EXTENSIONS,
  //     useValue: defaultEditorExtensions,
  //   },
  // ],
})
export class addTicketDialog {
  public Editor = ClassicEditor;
  public model = {
    editorData: ""
  };

  
  





  ticketTitle: any;
  assignee: any;
  reporter: any;

  startDateChange(event){
    console.log(this.startDate);
  }

  
  startDate:any;
  endDate:any;


  readonly testForm = new FormGroup({
    testValue: new FormControl(new TuiDay(2017, 2, 15)),
});
  // model:any;
  val: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: addTicketDialog, @Inject(TuiAlertService) private readonly alertService: TuiAlertService, private service: ProjectService, private refreshDash: refreshDashboardService, private dialogRef: MatDialogRef<addTicketDialog>) {
    this.val = data;
    console.log(this.val)
  }

  ngOnInit() {
    this.setValue();
  }

  setValue() {
    // this.assignee = "nkr4m"
    // this.reporter="nramac"
    // this.ticketTitle = "test01"
    // this.model.editorData = "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>"
  }

  updateSessionStore() {
    let p = JSON.parse(sessionStorage.getItem("ticketInfo"));
    this.service.fetchTickets(p.ProjectId).subscribe(
      (data) => {
        // console.log(id);
        console.log('Tickets: ', data);
        // this.ticketInfo = data;
        sessionStorage.setItem("ticketInfo", JSON.stringify(data));
        // this.router.navigate(["/app-base/project-base"]);
        this.refreshDash.updateStatus("true");
      },
      (error) => {

      }
    )
  }

  convertDateFormat(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  createNewTicket() {

    if (this.ticketTitle == undefined || this.ticketTitle == "") {
      this.alertService.open('Title cannot be saved empty!').subscribe({
        complete: () => {
          console.log('Notification is closed');
        },
      });
      return;
    }


    console.log(this.convertDateFormat(this.startDate))




    let ticketInfo = JSON.parse(sessionStorage.getItem("ticketInfo"));
    let username = sessionStorage.getItem("username");

    let requestData = {
      projectLinkId: ticketInfo.ProjectId,
      title: this.ticketTitle,
      description: this.model.editorData,
      currentState: this.val.ticket_against,
      reportedBy: username,
      startDate: this.convertDateFormat(this.startDate),
      endDate: this.convertDateFormat(this.endDate)
    }


    this.service.createTicket(requestData).subscribe(
      (data) => {
        if (data != null) {
          this.updateSessionStore();
          this.dialogRef.close();


        }

      },
      (error) => {

      }
    )




    console.log(requestData);


  }

}