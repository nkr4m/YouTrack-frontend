import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/app-wall/services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  projectForm:FormGroup;
  userId:any;
  projectList:any;
  noResultsFlag:boolean = false;

  constructor(private fb:FormBuilder, private service:ProjectService, private router:Router) { }

  ngOnInit(): void {
    this.initProjectForm();
    this.fetchProjectList();
    
  }

  initProjectForm(){
    this.projectForm = this.fb.group({
      "projectName":['', Validators.required]
    })
  }

  

  onSave(){
    this.userId = sessionStorage.getItem("username");
    console.log(this.userId);
    console.log(this.projectForm);
    this.service.createProject(this.projectForm.value, this.userId).subscribe(
      (data)=>{
        console.log(data)
        this.router.navigate(["/app-base/project-builder/view-all"]);
      },
      (error)=>{

      }
    )
  }

  fetchProjectList(){
    this.userId = sessionStorage.getItem("username");
    this.service.fetchProjects(this.userId).subscribe(
      (data)=>{
        this.projectList = data;
        console.log(this.projectList)
        if(Object.keys(data).length == 0){
          this.noResultsFlag = true;
        }
      },
      (error)=>{

      }
    )
  }

}
