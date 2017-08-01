import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {

  private recoveredUser = {
    email: '123',
    password: '321'
  };

  public storageUsersEmpty = true;
  public users: User[] = [];
  public userAuthorised = false;
  public usersInStorage = [];

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
    this.usersInStorage = JSON.parse(localStorage.getItem('usersList'));

    if (this.usersInStorage.length > 0) {
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

    localStorage.setItem('usersList', JSON.stringify(this.users));
  }

  checkUserLogin(login, cb) {
    let wrongEmail = true;
    this.users.forEach((el, ind) => {
      if (el.email === login.email && el.password === login.password) {
        wrongEmail = false;
        this.userAuthorised = true;
        cb('user ok');
        return;
      } else if (el.email === login.email && el.password !== login.password) {
        wrongEmail = false;
        cb('wrong password');
        return;
      }
    });
    if (wrongEmail) {
      cb('wrong email');
    }
    return;
  }

  checkUserEmail(email, cb) {
    let wrongEmail = true;
    this.users.forEach((el, ind) => {
      if (el.email === email) {
        wrongEmail = false;
        cb(el.password);
        return;
      }
    });
    if (wrongEmail === true) {
      cb('error');
      return;
    }
  }

  setRecoveredUser(recEmail, recPassword) {
    this.recoveredUser.email = recEmail;
    this.recoveredUser.password = recPassword;
  }

  getRecoveredUser(cb) {
    cb(this.recoveredUser);
    return;
  }

  update(user: User) {
    return this.users[0];
  }

  generateRandomNum(end) {
    return Math.floor((Math.random() * end) + 1);
  }

}
