import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormModule } from '@coreui/angular';
import { AlertModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    FormModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'login-mot1.us.auth0.com',
      clientId: 'ClNJpqQ7tFKfKoY6ki3v0nnKMFgPgR2B'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
