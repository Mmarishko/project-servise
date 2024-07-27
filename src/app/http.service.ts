import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = 'https://jsonplaceholder.typicode.com/';

  constructor(
      private http: HttpClient
  ) { }

  public get(url: string, parameterKey?: string, parameterValue?: string): Observable<any>{
    if (parameterKey && parameterValue) {
      const params = new HttpParams().set(parameterKey, parameterValue);
      const options = {params: params};

      return this.http.get(url, options);
    } else {
      return this.http.get(url);
    }

  }

  public getWithOptions(url: string): Observable<any>{
    const headers = new HttpHeaders({ 'X-Test': '1' });
    const options = { headers: headers };

      return this.http.get(url, options);


  }

  public post(url: string, parameters:any): Observable<any>{

    if (parameters && Object.keys(parameters).length != 0) {
      const firstKey = Object.keys(parameters)[0];
      const firstValue =String(parameters[firstKey]);

      const params = new HttpParams().set(firstKey, firstValue);
      const options = {params: params};

      return this.http.post(url, options);
    } else {
      return this.http.post(url, parameters);
    }

  }
  public delete(url: string): Observable<any>{
    return this.http.delete(url);
  }

}
