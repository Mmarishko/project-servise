import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styleUrls: ['./dinamic.component.css']
})
export class DinamicComponent implements OnInit {

  dinamicData = [
    {
      name: 'Игорь',
      age: 14,
      sex: 'мужской'
    },{
      name: 'Максим',
      age: 10,
      sex: 'мужской'
    },{
      name: 'Света',
      age: 5,
      sex: 'женский'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
