import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { User } from "../_models/user";
import { AlertifyService } from "../_services/Alertify.service";
import { AuthService } from "../_services/auth.service";
import { UserService } from "../_services/User.service";


@Injectable()
export class UserEditResolver implements Resolve<User> {

  constructor(private userService : UserService,private authService: AuthService ,private router: Router, private alertify: AlertifyService){}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertify.error('Probem retrieving your data');
        this.router.navigate(['/home']);
        return of(null as any);
      })
    );

  }

}
