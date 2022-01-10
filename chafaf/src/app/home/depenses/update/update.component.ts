import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DepenseFetch } from 'src/app/_models/depenseFetch';
import { Depenses } from 'src/app/_models/depenses';
import { DepensesService } from 'src/app/_services/Depenses.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  model: NgbDateStruct | undefined;

  message = '';
  depenses: any;
  //submitted = false;
  isDepensesAdded = false;

  constructor(private http : HttpClient,private depensesService : DepensesService , private router :Router, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.message = '';
    this.get(this.route.snapshot.paramMap.get('depensesId'));
  }

  get(depensesId: string | null): void {
    this.depensesService.getItem(depensesId)
      .subscribe(
        (depense: null) => {
          this.depenses = depense;
          console.log(depense);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.depenses.name,
      type: this.depenses.type,
      prix: this.depenses.prix,
      dateToday: this.depenses.date,
      available: status
    };

    this.depensesService.update(this.depenses.depensesId, data)
      .subscribe(
        response => {
          this.depenses.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  update(): void {
    this.depensesService.update(this.depenses.depensesId, this.depenses)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
  }






}
