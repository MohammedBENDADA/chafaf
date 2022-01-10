import { HttpClient } from '@angular/common/http';

import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Component, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Dons } from 'src/app/_models/dons';
import { DonsService } from 'src/app/_services/Dons.service';

@Component({
  selector: 'app-dons',
  templateUrl: './dons.component.html',
  styleUrls: ['./dons.component.css']
})
export class DonsComponent implements OnInit {
  model: NgbDateStruct | undefined;
  dons : Dons[]=[];
  submitted = false;
  isDonsAdded = false;

  constructor(private http : HttpClient,private donsService : DonsService , private router :Router) { }

  ngOnInit(): void {
    this.getDons();
  }

  getDons(){
    this.donsService.getAll()
        .subscribe(dons => this.dons=dons)
  }



  delete(val: any){
    if(confirm("are you sure to delet ?")){
      this.donsService.delete(val).subscribe(data => {
      });
      this.donsService.getAll().subscribe((response) => {
        this.dons = response;
        this.router.navigate(['/dons']);
      });
    }
  }



  getTotal = function(dons : Dons[]){
    var totaldons = 0;
    for(var i = 0; i < dons.length; i++){
        var product = dons[i];
        totaldons += (product.prix);
    }
    return totaldons;

  }

    /*************************************** */
//  depense : DepenseFetch= new DepenseFetch();
  don!: Dons
  addDepenses(): void {
    const data = {
      name: this.don.name,
      type: this.don.type,
      myProperty: this.don.myProperty,
      prix: this.don.prix,
      dateToday: this.don.dateToday
    };
    if (!data.name) {
      alert('name add');
      return;
    }
    this.donsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isDonsAdded = true;
        },
        error => {
          console.log(error);
        }
      )
  }

  newDepense(): void {
    this.isDonsAdded = false;
    this.don = {
      id:+'',
      name : '',
      type : '',
      myProperty:'',
      prix : +'',
      dateToday : new Date(),
      userId: +`{{this.authService.decodedToken?.nameid}}`,
    }
  }
}
