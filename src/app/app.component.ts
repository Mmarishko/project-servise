import { Component } from '@angular/core';
import {DataService} from "./data.service";

export interface ResponseData {
    id: number,
    title: string,
    userId: number,
    completed: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2.5';

  dataAll: ResponseData[] = [];
displayedColumns = [
    'id',
    'title',
    'userId',
    'completed',
]
  constructor(
      private data: DataService
  ) {
  }

  sendRequest() {
    this.data.get('https://jsonplaceholder.typicode.com/todos')
        .subscribe({
          next: (response) =>{
            this.dataAll.push(response);
            console.log(response);
          },
          error: (error) => {
            console.log(error.message())
          }
        })
  }
}
