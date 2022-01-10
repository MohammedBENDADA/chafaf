import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { DepenseFetch } from '../_models/depenseFetch';
import { Depenses } from '../_models/depenses';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DepensesService {
  baseUrl = 'http://localhost:5000/Depenses';
  userUrl = 'http://localhost:5000/user/';
  // headers = new HttpHeaders().set('Content-type','application/json').set('Accept', 'application/json');
  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  httpOptions= {
    headers : new HttpHeaders({
      'Authorization': 'Bearer' + localStorage.getItem('token')
    })

  }


  constructor(private http : HttpClient, private authService : AuthService) { }

  getDpenses(){
    return this.http.get<Depenses[]>(this.baseUrl , this.httpOptions);
  }
  getAll(): Observable<Depenses[]> {
    return this.http.get<Depenses[]>(`${this.userUrl}`+ this.authService.decodedToken.nameid);
  }
/**************************************************** */
  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}` , this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  // Create new item
  getItem(depensesId: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${depensesId}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }



  delete(depensesId: number): Observable<Depenses> {
    const url = `${this.baseUrl}/${depensesId}`
    return this.http.delete<Depenses>(url, this.httpOptions);
  }
  /* nouvau methode */


  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data , this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  // Edit/ Update
  update(depensesId: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}`, data , this.httpOptions).pipe(
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


