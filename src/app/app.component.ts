import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '2.4';
  constructor(
      private HttpService: HttpService
  ) { }

  sendGetRequest() {
    this.HttpService.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (response) => {
          console.log(response)
        },
      })
  }

  sendGetRequestWithOptions() {
    let params = {
      postId: 1
    };

    this.HttpService.get('https://jsonplaceholder.typicode.com/comments', 'postId', '1')
        .subscribe({
          next: (response) => {
            console.log(response)
          },
          error: (err) => {
              console.log(err.message);
          }
        })
  }

    sendGetRequestWithErrors() {

        this.HttpService.get('https://jsonplaceholder.typicode.com/post')
            .subscribe({
                next: (response) => {
                    console.log(response)
                },
                error: (err) => {
                    console.log(err.message);
                }
            })
    }

    sendGetRequestWithHeaders() {

        this.HttpService.getWithOptions('https://jsonplaceholder.typicode.com/posts')
            .subscribe({
                next: (response) => {
                    console.log(response)
                },
                error: (err) => {
                    console.log(err.message);
                }
            })
    }
    //5 кнопка должна отправлять GET запрос на адрес: https://jsonplaceholder.typicode.com/posts при этом в headers должно отправляться X-Test: 1, результат ответа должен быть не в JSON формате а в текстовом

    sendPostRequest() {
        let params = {};
        this.HttpService.post('https://jsonplaceholder.typicode.com/posts', params)
            .subscribe({
                next: (response) => {
                    console.log(response)
                },
                error: (err) => {
                    console.log(err.message);
                }
            })
    }

    sendDeleteRequest() {
        this.HttpService.delete('https://jsonplaceholder.typicode.com/posts/1')
            .subscribe({
                next: (response) => {
                    console.log(response)
                },
                error: (err) => {
                    console.log(err);
                }
            })
    }
}
