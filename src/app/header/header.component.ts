import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('activeUser');
    this.usersService.setActiveUser();
    window.location.reload();
  }
}
