import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { Depenses } from "../_models/depenses";
import { Dons } from "../_models/dons";
import { DepensesService } from "../_services/Depenses.service";
import { DonsService } from "../_services/Dons.service";
import { DepensesComponent } from "./depenses/depenses.component";

export type ChartOptions = {
  series:any;
  chart: any;
  responsive: any;
  labels: any;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  // @ViewChild("chart") chart : ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  dons : Dons[]=[];
  depenses : Depenses[]=[];
  prix : any;
  name1 : any;


  constructor(private depensesServise : DepensesService, private donsServise: DonsService) {
    this.getDons();
    this.getDpenses();
    this.chartOptions = {
      series: [...this.prix],
      chart: {
        width: 380,
        type: "pie"
      },

      labels: [...this.name1],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }



  ngOnInit(): void {
    this.getDons();
    this.getDpenses();
    // this.depensesServise.getAll()
    //   .subscribe(res => {
    //     console.log(this.name)
    //     this.name = res.map(res => res.name)
    //     this.prix = res.map(res => res.prix)
    //   })
  }

    name() { this.depensesServise.getAll()
      .subscribe(depenses => {
      this.depenses=depenses;
      var name = depenses.map(depenses => depenses.name);


    })
    // console.log(name);
  }


  getDpenses(){

    this.depensesServise.getAll()
        .subscribe(depenses => {
          console.log(depenses)
          // this.depenses=depenses;
          this.prix = depenses.map(depenses => depenses.prix)
          this.name1 = depenses.map(depenses => depenses.name)


        })

  }
  getDons(){
    this.donsServise.getAll()
        .subscribe(dons => {
          this.dons=dons;
          let name = dons.map(dons => dons.name)
        let prix = dons.map(dons => dons.prix)
        })
  }

  getTotal = function(depenses : Depenses[],dons: Dons[]){
    var totaldepenses = 0;
    var totaldons = 0;
    for(var i = 0; i < depenses.length; i++){
        var product = depenses[i];
        totaldepenses += (product.prix);
    }

    for(var i = 0; i < dons.length; i++){
        var don = dons[i];
        totaldons += (don.prix);
    }
    return totaldons-totaldepenses;
  }


  getname (depenses : Depenses[]){
    var names : any;
    for(let i =0; i<depenses.length;i++){
      var ruslt = depenses[i];
      names += (ruslt.name)
    }
    console.log(names)
    return names;
  }


}
