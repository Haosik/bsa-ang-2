import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  wrongEmail = false;
  wrongPassword = false;
  emailTimeout: any;
  passwordTimeout: any;

  constructor(private usersService: UsersService, public router: Router) { }

  loginStatus: string;

  ngOnInit() {
  }

  submitLoginForm(form) {
    this.wrongEmail = false;
    this.wrongPassword = false;
    clearTimeout(this.emailTimeout);
    clearTimeout(this.passwordTimeout);
    const login = {...form.value };
    this.usersService.checkUserLogin(login, (status, user) => {
      this.loginStatus = status;

      if (this.loginStatus === 'user ok') {
        this.usersService.setActiveUser(JSON.stringify(user));
        this.router.navigate(['/']);
        return;
      } else if (this.loginStatus === 'wrong email') {
        this.wrongEmail = true;
        this.emailTimeout = setTimeout(() => {
          this.wrongEmail = false;
        }, 3000);
        return;
      } else if (this.loginStatus === 'wrong password') {
        this.wrongPassword = true;
        this.passwordTimeout = setTimeout(() => {
          this.wrongPassword = false;
        }, 3000);
        return;
      }
    });

  }

}
