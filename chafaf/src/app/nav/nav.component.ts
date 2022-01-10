import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/User.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user! : User;
  constructor(public authService :AuthService, private router :Router, private userService : UserService , private alerrtfy: AlertifyService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loggedIn(){
    return this.authService.loggedIn();
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    console.log('logged out');
  }
//login **************************************


}
