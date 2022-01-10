
import { HttpClient, HttpHandler, HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { DonFetch } from '../_models/donFetch';
import { Dons } from '../_models/dons';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonsService {
  baseUrl = 'http://localhost:5000/Dons';
  //headers = new HttpHeaders().set('Content-type','application/json').set('Accept', 'application/json');
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions= {
    headers : this.headers
  }
  constructor(private http : HttpClient) { }

  getDons(){
    return this.http.get<Dons[]>(this.baseUrl);
  }

  getAll(): Observable<Dons[]> {
    return this.http.get<Dons[]>(this.baseUrl);
  }


  /**************************************************** */
  list(): Observable<any> {
    return this.http.get(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }



  delete(id: number): Observable<Dons> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Dons>(url, this.httpOptions);
  }
  /* nouvau methode */


  create(dataa: any): Observable<any> {
    return this.http.post(this.baseUrl, dataa).pipe(
      catchError(this.handleError)
    );
  }


  // Edit/ Update
  update(id: any,dataa: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, dataa).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };




}
