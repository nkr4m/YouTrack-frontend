import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  passwordMatch:boolean = true;
  errorMsg:any;
  registerResponse:any;

  constructor(private fb:FormBuilder, private service:UserAuthService) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
    
    this.registerForm = this.fb.group({
      emailId:["", Validators.required],
      name:["", Validators.required],
      profession:["", Validators.required],
      org:["", Validators.required],
      password:["", Validators.required],
      password2:["", Validators.required]
    })
  }

  onRegister(){
    this.errorMsg = null;
    this.passwordMatch = true;
    console.log(this.registerForm);

    if(this.registerForm.value.password != this.registerForm.value.password2){
      this.passwordMatch = false;
      return;
    }else{
      this.service.registerUser(this.registerForm.value).subscribe(
        (data)=>{
          this.registerResponse = data;
          if(this.registerResponse.status == "F"){
            this.errorMsg = this.registerResponse.message;
          }
          

        },
      (error)=>{
        this.errorMsg = error.message;
      }
      )
    }

  }

}
