import { Component, OnInit,Inject } from '@angular/core';
// Import the AuthService type from the SDK
import { DOCUMENT } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  RegisterForm!: FormGroup;
  submitted = false;
  Details:any=[];
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  MOBILE_PATTERN = "^((\\+91-?)|0)?[0-9]{10}$";
 Registerurl='https://localhost:44323/api/app/app-users';
  constructor(public formBuilder:FormBuilder,public auth :AuthService,@Inject(DOCUMENT) public document: Document,private http:HttpClient) { 
  }

  ngOnInit(): void {
    this.Details=[];
    this.RegisterForm=this.formBuilder.group({
      CompanyName:new FormControl('',[Validators.required]),
      CompanyPAN:new FormControl('',[Validators.required]),
      CompanyGST:new FormControl('',[Validators.required]),
      ContactPerson:new FormControl('',[Validators.required]),
      Email:new FormControl(''),
      ContactNo:new FormControl('',[Validators.required,Validators.pattern(this.MOBILE_PATTERN)]),
  })

  }
 public Register():void{
    console.log(this.Details);
    this.http.post(this.Registerurl,{
      "companyName": this.RegisterForm.value.CompanyName,
      "email": this.RegisterForm.value.Email,
      "companyPanNumber": this.RegisterForm.value.CompanyPAN,
      "contactNumber": this.RegisterForm.value.ContactNo,
      "companyGSTNumber": this.RegisterForm.value.CompanyGST,
      "contactPersonName": this.RegisterForm.value.ContactPerson
     }).subscribe(result=>{
     this.Details.push(this.RegisterForm.value);
     console.log(this.Details)
   });
    } 
 onSubmit() {
    console.warn( this.RegisterForm.value);
    this.RegisterForm.reset();
  }


}
