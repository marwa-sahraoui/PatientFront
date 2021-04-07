import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseURL = '/assess';
@Injectable({
  providedIn: 'root'
})
export class DiabetreportService {

  constructor(private httpClient: HttpClient) { }

  getFeedback(data): Observable<any> {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.post(`${baseURL}/id?patId=${data.patId}`, data, { headers, responseType: 'text'});
  }
}
