import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class MyResolverResolver implements Resolve<boolean> {
  constructor(
      private HttpService: HttpService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.HttpService.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
