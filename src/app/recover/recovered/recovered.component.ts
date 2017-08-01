import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-recovered',
  templateUrl: './recovered.component.html',
  styleUrls: ['./recovered.component.scss']
})
export class RecoveredComponent implements OnInit {
  recoveredUser: any;
  recoveredEmail: string;
  recoveredPassword: string;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getRecoveredUser((data) => {
      this.recoveredUser = data;
      this.recoveredEmail = this.recoveredUser.email;
      this.recoveredPassword = this.recoveredUser.password;
    });
  }

}
