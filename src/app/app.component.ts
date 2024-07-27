import { Component, OnInit } from '@angular/core';

interface Books {
  title: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms 2.2';

  books_list: Books[] = [
    {
      title: 'Евгений Онегин',
      author: 'Александр Пушкин',
    },
    {
      title: 'Мертвые души',
      author: 'Николая Гоголь',
    },
    {
      title: 'Война и мир',
      author: 'Лев Толстой',
    },
  ];
  create_book = {
    title: null,
    author: null,
  };

  ngOnInit() {

  }

  createBook() {
    this.books_list.push({
      title: this.create_book.title,
      author: this.create_book.author,
    });
  }
}
