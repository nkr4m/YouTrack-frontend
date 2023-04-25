import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private API_URL = environment.PROJECT_SERVICE_API_URL;

  constructor(private http: HttpClient) { }


  createProject(data:any, userId:any){
    return this.http.post(this.API_URL + "save-project/" + userId, data);
  }

  fetchProjects(userId:any){
    return this.http.get(this.API_URL + "fetch-project/" + userId);
  }


  fetchTickets(projectId:any){
    return this.http.get(this.API_URL + "fetch-ticket/" + projectId);
  }

  createTicket(data:any){
    return this.http.post(this.API_URL + "add-new-ticket/", data);
  }

  statusUpdater(data:any){
    return this.http.post(this.API_URL + "status-updater/", data)
  }

  fetchCalenderView(id){
    return this.http.get(this.API_URL + "fetch-calender-view/" + id);
  }

  deleteTicket(id){
    return this.http.delete(this.API_URL + "delete-ticket/" + id)
  }


  updateTicket(id, data){
    return this.http.put(this.API_URL + "update-ticket/" + id, data);
  }



}
