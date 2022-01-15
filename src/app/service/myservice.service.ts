import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { 


  }
  listing(): Observable<any> {
    return this.http.get('https://staging.pearpartner.com/restaurant/100');
  }
}
