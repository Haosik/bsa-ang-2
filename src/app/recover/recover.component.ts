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

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.randomFirst = this.usersService.generateRandomNum(100);
    this.randomSecond = this.usersService.generateRandomNum(100);
  }

  submitRecoverForm(recoverForm) {
    if (Number(recoverForm.value.answer) === (this.randomFirst + this.randomSecond)) {
      this.usersService.checkUserEmail(recoverForm.email, (result) => {
        if (result === 'error') {
          this.wrongEmail = true;
          setTimeout(() => {
            this.wrongEmail = false;
          }, 5000);
        }
        console.log(result);
      });
    } else {
      this.wrongAnswer = true;
      setTimeout(() => {
        this.wrongAnswer = false;
      }, 5000);
      console.log('Wrong answer!');
    }
  }
}
