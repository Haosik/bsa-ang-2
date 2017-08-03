import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  first_name: string;
  last_name: string;
  email: string;
  year: number;
  password: string;

  startYear = 2000;
  years: number[] = [];
  showPassword = false;
  changedNotif = false;
  changedNotifTimer: any;

  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.user = this.usersService.getActiveUser();
    console.log(this.user.first_name);
    this.first_name = this.user.first_name;
    this.last_name = this.user.last_name;
    this.email = this.user.email;
    this.year = this.user.year;
    this.password = this.user.password;

    for (let i = this.startYear; i > 1899; i--) {
      this.years.push(i);
    }
  }

  submitProfileForm(form) {
    if (form.valid) {
      const user = form.value;
      this.usersService.update(user, (result) => {
        console.log(result);
        this.changedNotif = true;
        this.changedNotifTimer = setTimeout(() => {
          this.changedNotif = false;
        }, 5000);
      });
    }
  }

  togglePassword(event) {
    event.target.classList.toggle('active');
    this.showPassword = !this.showPassword;
  }

}
