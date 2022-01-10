import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { JwtHelperService } from'@auth0/angular-jwt';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/Auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  headers = new HttpHeaders({
    'Authorisation': 'Bearer'+ localStorage.getItem('token')
  })
  httpOptions= {
    headers : this.headers
  }
constructor(private http : HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    )
  }
  register(user: User){
    return this.http.post(this.baseUrl + 'register', user);

  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }


}
