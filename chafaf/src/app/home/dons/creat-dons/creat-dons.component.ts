import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DonFetch } from 'src/app/_models/donFetch';
import { AuthService } from 'src/app/_services/auth.service';
import { DonsService } from 'src/app/_services/Dons.service';

@Component({
  selector: 'app-creat-dons',
  templateUrl: './creat-dons.component.html',
  styleUrls: ['./creat-dons.component.css']
})
export class CreatDonsComponent implements OnInit {

  model: NgbDateStruct | undefined;

  submitted = false;
  isDepensesAdded = false;

  constructor(public authService : AuthService,private donsService : DonsService , private router :Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  done = new DonFetch();

  addDepenses(): void {
    const data = {
      depensesId: this.done.id,
      name: this.done.name,
      type: this.done.type,
      myProperty: this.done.myProperty,
      prix: this.done.prix,
      dateToday: this.done.dateToday,
      userId: +this.authService.decodedToken?.nameid
    };

    this.donsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isDepensesAdded = true;
          this.router.navigate(['/dons']);
        },
        error => {
          console.log(error);
        }

      )
  }

  newDepense(): void {
    this.isDepensesAdded = false;
    this.done = {
      id:+'',
      name : '',
      type : '',
      myProperty : '',
      prix : +'',
      dateToday : new Date(),
      userId: +this.authService.decodedToken?.nameid
    }
  }

}
