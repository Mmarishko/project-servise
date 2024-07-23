import { Component } from '@angular/core';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project_servise';

  accordionGroups: any[] = [
    {
      header: 'Static Header',
      content: 'This content is straight in the template.'
    },
    {
      header: 'Another group',
      content: 'Another content'
    },
    {
      header: 'Some another group',
      content: 'Some another content'
    },
    {
      header: 'Last group',
      content: 'Last content'
    }
  ]

  data = [
    {
      "name": "Germany",
      "value": 40632,
      "extra": {
        "code": "de"
      }
    },
    {
      "name": "United States",
      "value": 50000,
      "extra": {
        "code": "us"
      }
    },
    {
      "name": "France",
      "value": 36745,
      "extra": {
        "code": "fr"
      }
    },
    {
      "name": "United Kingdom",
      "value": 36240,
      "extra": {
        "code": "uk"
      }
    },
    {
      "name": "Spain",
      "value": 33000,
      "extra": {
        "code": "es"
      }
    },
    {
      "name": "Italy",
      "value": 35800,
      "extra": {
        "code": "it"
      }
    }
  ]

  notiflix_notify(type: string) {
    switch (type) {
      case 'success':
        Notify.success('This is success alert!');
        break;
      case 'warning':
        Notify.warning('This is warning alert!');
        break;
      case 'info':
        Notify.info('This is info alert!');
        break;
      case 'failure':
        Notify.failure('This is error alert!');
        break;
    }
  }

  notiflix_confirm(text: string) {
    Confirm.show(
        'Notiflix Confirm',
        text,
        'Yes',
        'No',
        () => {
          alert('Thank you.');
        },
        () => {
          alert('If you say so...');
        },
        {
        },
    );
  }
}
