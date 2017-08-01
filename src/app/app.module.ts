import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdCardModule, MdIconModule, MdSortModule, MdSelectModule } from '@angular/material';
import { RecoveredComponent } from './recover/recovered/recovered.component';

import { UsersService } from './users.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    RecoverComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    RecoveredComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    MdSortModule,
    MdSelectModule
  ],
  providers: [UsersService, FormBuilder, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
