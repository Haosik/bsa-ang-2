import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  storageUsersEmpty = true;
  users: User[] = [];
  userAuthorised = false;
  usersInStorage = [];

  mockedUsers: User[] = [
    {
      id: 0,
      first_name: 'admin',
      last_name: '',
      email: 'admin@example.com',
      year: 1988,
      password: 'qwerty'
    }
  ];

  constructor() {
    this.getUsersFromStorage();
  }

  getUsersFromStorage() {
    const usersInStorage = JSON.parse(localStorage.getItem('usersList'));

    if (usersInStorage && usersInStorage.length > 0) {
      this.users = [...this.usersInStorage];
    } else {
      this.users = [...this.mockedUsers];
    }
  }

  getUsers() {
    return this.users;
  }

  create(user: User) {
    this.users.push(user);

    localStorage.setItem( JSON.stringify(this.users), 'usersList');
  }

  update(user: User) {
    return this.users[0];
  }

}
