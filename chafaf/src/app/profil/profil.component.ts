import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/User.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user! : User;
  constructor(private userService : UserService, private router : Router , private alerrtfy: AlertifyService
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  // loadUser(){
  //   this.userService.getUser(+this.route.snapshot.params['UserId']).subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     this.alerrtfy.error(error);
  //   })
  // }













}


