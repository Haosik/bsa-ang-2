import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  loginStatus: string;

  ngOnInit() {
  }

  submitLoginForm(form) {
    const login = { ...form.value };
    console.log(login);
    this.usersService.checkUserLogin(login, (status) => {
      this.loginStatus = status;

      if (this.loginStatus === 'user ok') {
        this.usersService.setActiveUser(login.email);
        console.log('redirect!!!');
        return;
      } else if (this.loginStatus === 'wrong email') {
        console.log('Wrong email!');
        return;
      } else if (this.loginStatus === 'wrong password') {
        console.log('Wrong password!');
        return;
      }
    });

  }

}
