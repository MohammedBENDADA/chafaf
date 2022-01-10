export class DepenseFetch {
  depensesId: number;
  name: string;
  type: string;
  prix: number;
  date: Date;
  userId: number;

  constructor(){
    this.depensesId =+'';
    this.name = '';
    this.type = '';
    this.prix = +'';
    this.date = new Date();
    this.userId= +'';
  }
}
