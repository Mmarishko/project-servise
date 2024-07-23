import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private title: Title,
        private meta: Meta,
        private router: Router,
    ) {
        this.meta.addTag({name: 'og:desc', content: 'root_desc'})
    }

    ngOnInit() {
        this.title.setTitle("Desk Page");
    }

    linkToSrc(src: string) {
        this.router.navigateByUrl(src);
    }
}
