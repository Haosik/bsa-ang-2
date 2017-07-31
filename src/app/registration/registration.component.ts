import { Component, OnInit, ViewChild } from '@angular/core';
import { MdButtonModule, MdInputModule, MdSelectModule } from '@angular/material';
import { UsersService } from '../users.service';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  year = 2000;
  years: number[] = [];
  user: User;
  userCreated = false;
  userFailed = false;

  constructor(private usersService: UsersService) {
    for (let i = this.year; i > 1899; i--) {
      this.years.push(i);
    }
  }

  @ViewChild('regForm') regForm;

  ngOnInit() {
  }

  submitRegForm(form) {
    if (form.control.status === 'VALID') {
      this.user = form.value;
      this.usersService.create(this.user);
      this.regForm.control.reset();
      this.userCreated = true;
    } else {
      this.userFailed = true;
      setTimeout(() => {
        this.userFailed = false;
      }, 3000);
    }
  }

}
