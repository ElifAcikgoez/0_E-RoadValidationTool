import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/data';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Data[]>(this.baseUrl);
  }
  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'});
  }

  getOne(id: string): Observable<Data>{
    return this.http.get<Data>(this.baseUrl + '/' + id);
  }
  update(id: string, data: Data): Observable<Data> {
    return this.http.patch<Data>(this.baseUrl + '/' + id, data);
  }
  create(data: Data): void {
    this.http.post<Data>(this.baseUrl, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}
