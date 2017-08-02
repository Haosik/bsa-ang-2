import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockTimerComponent } from './clock-timer.component';
import { WatchService } from './watch.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    ClockTimerComponent
  ],
  providers: [
    WatchService
  ],
  exports: [
    ClockTimerComponent
  ]
})
export class TimerModule { }
