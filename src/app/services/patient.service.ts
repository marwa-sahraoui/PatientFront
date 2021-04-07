import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = '/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id): Observable<any> {
    return this.httpClient.get(`${baseURL}/${id}`);
  }

  add(data): Observable<any> {
    return this.httpClient.post(`${baseURL}/add`, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  searchByPhone(phone): Observable<any> {
    return this.httpClient.get(`${baseURL}/phone/${phone}`);
  }

  searchByAddress(address): Observable<any> {
    return this.httpClient.get(`${baseURL}?address=${address}`);
  }
}
