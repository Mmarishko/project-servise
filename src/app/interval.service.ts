import { Injectable } from '@angular/core';
import { interval, Observable, generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {

  constructor() { }

  counter = interval(2000);
  rundom_number = interval(2000);

}
