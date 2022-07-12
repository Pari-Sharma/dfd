import { Component, OnInit,Inject } from '@angular/core';
// Import the AuthService type from the SDK
import { DOCUMENT } from '@angular/common';

import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth :AuthService,@Inject(DOCUMENT) public document: Document,) { }

  ngOnInit(): void {
  }

}
