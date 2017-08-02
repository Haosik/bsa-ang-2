import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { BlockWhenAuthGuard } from './block-when-auth.guard';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RecoverComponent } from './recover/recover.component';
import { RecoveredComponent } from './recover/recovered/recovered.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UserslistComponent } from './userslist/userslist.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdIconModule, MdSortModule, MdSelectModule, MdTabsModule } from '@angular/material';


import { UsersService } from './users.service';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    RecoverComponent,
    RecoveredComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    ProfileComponent,
    UserslistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule,
    MdSortModule,
    MdSelectModule,
    MdTabsModule
  ],
  providers: [UsersService, AuthGuard, BlockWhenAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
