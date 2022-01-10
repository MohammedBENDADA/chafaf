import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { JwtHelperService } from'@auth0/angular-jwt';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:5000/api/Users/';

  constructor(private http : HttpClient) { }






  getUser(userId: number): Observable<User>{
    return this.http.get<User>(this.baseUrl + userId);
  }


  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.baseUrl,user);
  }



}
