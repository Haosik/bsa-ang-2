import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoverComponent } from './recover/recover.component';
import { RecoveredComponent } from './recover/recovered/recovered.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
    children: []
  },
  {
    path: 'recover',
    children: [{
      path: '',
      component: RecoverComponent
    }, {
      path: 'recovered',
      component: RecoveredComponent
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: []
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
