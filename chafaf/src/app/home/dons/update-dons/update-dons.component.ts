import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DonsService } from 'src/app/_services/Dons.service';

@Component({
  selector: 'app-update-dons',
  templateUrl: './update-dons.component.html',
  styleUrls: ['./update-dons.component.css']
})
export class UpdateDonsComponent implements OnInit {

  model: NgbDateStruct | undefined;

  message = '';
  dons: any;
  //submitted = false;
  isDepensesAdded = false;

  constructor(private http : HttpClient,private donsService : DonsService , private router :Router, private route: ActivatedRoute){}
  ngOnInit(): void {
    this.message = '';
    this.get(this.route.snapshot.paramMap.get('id'));
  }

  get(id: string | null): void {
    this.donsService.getItem(id)
      .subscribe(
        (done: null) => {
          this.dons = done;
          console.log(done);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const dataa = {
      name: this.dons.name,
      type: this.dons.type,
      myProperty:this.dons.myProperty,
      prix: this.dons.prix,
      dateToday: this.dons.date,
      available: status
    };

    this.donsService.update(this.dons.id, dataa)
      .subscribe(
        response => {
          this.dons.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }



  update(): void {
    this.donsService.update(this.dons.id, this.dons)
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
