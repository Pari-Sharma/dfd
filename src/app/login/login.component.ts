import { Component, OnInit,Inject } from '@angular/core';
// Import the AuthService type from the SDK
import { DOCUMENT } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  simpleForm!: FormGroup;
  submitted = false;
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  MOBILE_PATTERN = "^((\\+91-?)|0)?[0-9]{10}$"

  constructor(public formBuilder:FormBuilder,public auth :AuthService,@Inject(DOCUMENT) public document: Document,) { }

  ngOnInit(): void {
    this.simpleForm=this.formBuilder.group({
      CompanyName:new FormControl('',[Validators.required]),
      CompanyPAN:new FormControl('',[Validators.required]),
      CompanyGST:new FormControl('',[Validators.required]),
      ContactPerson:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      ContactNo:new FormControl('',[Validators.required,Validators.pattern(this.MOBILE_PATTERN)]),
  })
  }
  get f() {
    return this.simpleForm.controls;
  }
  onSubmit() {
    console.warn( this.simpleForm.value);
    this.simpleForm.reset();
  }

}
