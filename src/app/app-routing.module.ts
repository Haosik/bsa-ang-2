import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecoverComponent } from './recover/recover.component';
import { RecoveredComponent } from './recover/recovered/recovered.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { BlockWhenAuthGuard } from './block-when-auth.guard';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [BlockWhenAuthGuard],
    children: []
  },
  {
    path: 'recover',
    children: [{
      path: '',
      canActivate: [BlockWhenAuthGuard],
      component: RecoverComponent,
    }, {
      path: 'recovered',
      canActivate: [BlockWhenAuthGuard],
      component: RecoveredComponent
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BlockWhenAuthGuard],
    children: []
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
