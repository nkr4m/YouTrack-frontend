import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSchedulerModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { ProjectService } from 'src/app/app-wall/services/project.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {

  constructor(private service:ProjectService) {

    let projId = JSON.parse(sessionStorage.getItem("ticketInfo")).ProjectId;

    this.service.fetchCalenderView(projId).subscribe(
      (data)=>{
        this.appointments = data;
        console.log(this.appointments)
      },
      (error)=>{

      }
    )

  }

  appointments:any;



  resources: any[] = [
    {
      id: 1,
      color: '#939393',
    }, {
      id: 2,
      color: '#ff1414',
    },
    {
      id: 3,
      color: '#39ff14'
    },
    {
      id:4,
      color: '#ffb014'
    }
  ];
  

  // appointmentsData: Appointment[];
  // appointments: any[] = [
    // {
    //   text: 'Website Re-Design Plan',
    //   roomId: 1,
    //   startDate: new Date('2023-04-05'),
    //   endDate: new Date('2023-04-05'),
    //   allDay: true,
    // }, {
    //   text: 'Rollout of New Website and Marketing Brochures',
    //   roomId: 2,
    //   startDate: new Date('2023-04-05'),
    //   endDate: new Date('2023-04-05'),
    //   allDay: true,
    // }, {
    //   text: 'Update Sales Strategy Documents',
    //   roomId: 4,
    //   startDate: new Date('2023-04-21'),
    //   endDate: new Date('2023-04-23'),
    //   allDay: true,
    // }
  //];

  date2 = Date.now();
  // currentDate: Date = new Date(2021, 2, 25);
  
  currentDate: Date = new Date(Date.now());



  showToast(event, value, type) {
    notify(`${event} "${value}"` + ' task', type, 800);
  }



  onAppointmentAdded(e) {
    this.showToast('Added', e.appointmentData.text, 'success');
  }

  onAppointmentUpdated(e) {
    this.showToast('Updated', e.appointmentData.text, 'info');
  }

  onAppointmentDeleted(e) {
    this.showToast('Deleted', e.appointmentData.text, 'warning');
  }



  onAppointmentFormOpening(e:any){
    e.cancel = true;
  }


  ngOnInit(): void {
  }

}
