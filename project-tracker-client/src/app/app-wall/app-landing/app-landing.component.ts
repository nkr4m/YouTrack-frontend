import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-app-landing',
  templateUrl: './app-landing.component.html',
  styleUrls: ['./app-landing.component.css']
})
export class AppLandingComponent implements OnInit {

  loginForm:FormGroup;
  errorMsg:any;

  constructor(private fb:FormBuilder, private route:Router, private service:UserAuthService) { }

  ngOnInit(): void {

    let username = sessionStorage.getItem("username");
    if(username != null){
      this.route.navigateByUrl("app-base");
    }

    this.initLoginForm();

  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      'emailId': ['', [Validators.required]],
      'password':['', [Validators.required]]
    })
  }

  onLogin(){
    this.errorMsg = null;
    const email = this.loginForm.value.emailId;
    const password = this.loginForm.value.password;

    this.service.loginUser(this.loginForm.value).subscribe(
      (data)=>{
        let val:any = data;
        if(val.status == 'F'){
          this.errorMsg = val.message;
        }else{
          console.log('user-data',data)
          
          let userDtls = {
            "name":val.name,
            "org":val.org,
            "profession":val.profession,
          }
          sessionStorage.setItem("userDtls", JSON.stringify(userDtls));
          sessionStorage.setItem("username", email);


          this.route.navigateByUrl("app-base");
        }  
      },
      (error)=>{
        this.errorMsg = error
      }
    )


    // if(email === "nkr4m" && password == "123"){
    //   sessionStorage.setItem("username", "nkr4m");
    //   this.route.navigateByUrl("app-base");
    // }
  }

}
