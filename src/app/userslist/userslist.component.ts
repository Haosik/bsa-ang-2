import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users: User[] = [];

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

}
