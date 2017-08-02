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

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.user = this.usersService.getActiveUser();
  }

}
