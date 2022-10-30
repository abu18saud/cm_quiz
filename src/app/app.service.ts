import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url = 'https://fakerapi.it/api/v1/products';
  constructor(public http: HttpClient) { }
  public getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}

export const environment = {
  production: false,
  url: ''
};
