import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit {
  randomFirst: number;
  randomSecond: number;
  userPassword: string;

  wrongEmail = false;
  wrongAnswer = false;
  emailTimer: any;
  answerTimer: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.randomFirst = this.usersService.generateRandomNum(100);
    this.randomSecond = this.usersService.generateRandomNum(100);
  }

  submitRecoverForm(recoverForm) {
    clearTimeout(this.emailTimer);
    clearTimeout(this.answerTimer);
    this.wrongEmail = false;
    this.wrongAnswer = false;

    if (Number(recoverForm.value.answer) === (this.randomFirst + this.randomSecond)) {
      this.usersService.checkUserEmail(recoverForm.value.email, (result) => {
        if (result === 'error') {
          this.wrongEmail = true;
          this.emailTimer = setTimeout(() => {
            this.wrongEmail = false;
          }, 5000);
        } else {
          console.log(result);
          console.log('Redirect to children - Recovered component');
        }
      });
    } else {
      this.wrongAnswer = true;
      this.answerTimer = setTimeout(() => {
        this.wrongAnswer = false;
      }, 5000);
      console.log('Wrong answer!');
    }
  }
}
