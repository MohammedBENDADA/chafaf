import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DepenseFetch } from 'src/app/_models/depenseFetch';
import { Depenses } from 'src/app/_models/depenses';
import { AuthService } from 'src/app/_services/auth.service';
import { DepensesService } from 'src/app/_services/Depenses.service';


@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {
  model: NgbDateStruct | undefined;
  depenses : Depenses[]=[];
  submitted = false;
  isDepensesAdded = false;

  constructor(public authService: AuthService , private http : HttpClient,public depensesService : DepensesService , private router :Router) { }

  ngOnInit(): void {
    this.getDpenses();
  }

  getDpenses(){
    this.depensesService.getAll()
        .subscribe(depenses => this.depenses=depenses)
  }



  delete(val: any){
    if(confirm("are you sure to delet ?")){
      this.depensesService.delete(val).subscribe(data => {
      });
      this.depensesService.getAll().subscribe((response) => {
        this.depenses = response;
        this.router.navigate(['/depenses']);
      });
    }
  }



  getTotal = function(depenses : Depenses[]){
    var totaldepenses = 0;
    for(var i = 0; i < depenses.length; i++){
        var product = depenses[i];
        totaldepenses += (product.prix);
    }
    return totaldepenses;

  }

  /*************************************** */
//  depense : DepenseFetch= new DepenseFetch();
  depense!: Depenses
  addDepenses(): void {
    const data = {
      name: this.depense.name,
      type: this.depense.type,
      prix: this.depense.prix,
      date: this.depense.date,
      userId: this.authService.decodedToken.nameid

    };
    if (!data.name) {
      alert('name add');
      return;
    }
    this.depensesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isDepensesAdded = true;
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
