import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollabService {

  constructor(private http:HttpClient) { }
  private API_URL = environment.NOTIFICATION_SERVICE_API_URL;


  sendInvite(data){
    return this.http.post(this.API_URL + 'send-invite', data);
  }

  viewInvites(emailId){
    return this.http.get(this.API_URL + 'view-notification/' + emailId);
  }

  actionInvite(inviteId, action){
    return this.http.post(this.API_URL + 'invite-action/' + inviteId + '/' + action, null);
  }

  fetchCollabProjects(userId:any){
    return this.http.post(this.API_URL + "fetch-collab-projects/" + userId, null);
  }

  fetchCollabProjectsUser(projectId:any){
    return this.http.get(this.API_URL + "fetch-proj-collabs/" + projectId);
  }

}
