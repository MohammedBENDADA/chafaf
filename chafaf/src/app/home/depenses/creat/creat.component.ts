import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DepenseFetch } from 'src/app/_models/depenseFetch';
import { Depenses } from 'src/app/_models/depenses';
import { DepensesService } from 'src/app/_services/Depenses.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit {

  model: NgbDateStruct | undefined;

  submitted = false;
  isDepensesAdded = false;

  constructor(public authService: AuthService, private depensesService : DepensesService , private router :Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  depense = new DepenseFetch();
  addDepenses(): void {
    const data = {
      depensesId: this.depense.depensesId,
      name: this.depense.name,
      type: this.depense.type,
      prix: this.depense.prix,
      date: this.depense.date,
      userId: +this.authService.decodedToken.nameid
    };

    this.depensesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isDepensesAdded = true;
          this.router.navigate(['/depenses']);
        },
        error => {
          console.log(error);
        }

      )
  }

  newDepense(): void {
    this.isDepensesAdded = false;
    this.depense = {
      depensesId:+'',
      name : '',
      type : '',
      prix : +'',
      date : new Date(),
      userId: +this.authService.decodedToken.nameid


    }
  }

}
