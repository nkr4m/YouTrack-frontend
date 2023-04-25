import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private API_URL = environment.USER_SERVICE_API_URL;

  constructor(private http: HttpClient) { }

  public registerUser(data: any) {
    return this.http.post(this.API_URL + "register-user", data);
  }

  public loginUser(data: any) {
    return this.http.post(this.API_URL + "login-user", data);
  }



}
