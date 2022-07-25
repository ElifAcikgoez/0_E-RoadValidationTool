import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gettingstarted } from '../models/gettingstarted.model';
import {Data} from "./data";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  getDataById(dataId: number): Observable<Data> {
    return this.http
      .get<Data>(this.baseUrl + '/' + dataId);
  }

  getOne(id: string): Observable<Data>{
    return this.http.get<Data>(this.baseUrl + '/' + id);
  }
  getAll(): Observable<Gettingstarted[]> {
    return this.http.get<Gettingstarted[]>(this.baseUrl);
  }
  get(id: any): Observable<Gettingstarted> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  update(id: string, data: Data): Observable<Data> {
    return this.http.patch<Data>(this.baseUrl + '/' + id, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
  findByTitle(title: any): Observable<Gettingstarted[]> {
    return this.http.get<Gettingstarted[]>(`${this.baseUrl}?title=${title}`);
  }
}

