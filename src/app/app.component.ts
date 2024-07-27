import { Component } from '@angular/core';
import { IntervalService } from './interval.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2.3 RxJs';
  intervalSubs$!: Subscription;
  intervalRandomSubs$!: Subscription;
  enableRaisedButton = false;
  counterNumbers: number[] = [];
  randomNumbers: string[] = [];


  constructor(
      public intervalService: IntervalService
  ) {}

  enableSubscription() {
    this.intervalSubs$ = this.intervalService.counter
      .subscribe(
    (value: number) => {
        this.counterNumbers.push(value);
        console.log(value);
      }
    )
    this.intervalRandomSubs$ = this.intervalService.rundom_number
        .pipe(
          map((value) => {
            value = Math.floor(Math.random() * 1000)
            return `Random Value: ${value}`
          }),
        )
        .subscribe(
        (value: string) => {
          console.log(value);
          this.randomNumbers.push(value);
        }
    )
    this.enableRaisedButton = true;
  }

  disableSubscription() {
    this.intervalSubs$.unsubscribe();
    this.intervalRandomSubs$.unsubscribe()
    this.enableRaisedButton = false;
  }
}
