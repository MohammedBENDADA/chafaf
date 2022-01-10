export class DonFetch {
  id: number;
  name: string;
  type: string;
  myProperty: string;
  prix: number;
  dateToday: Date;
  userId: number;

  constructor(){
    this.id =+'';
    this.name = '';
    this.type = '';
    this.myProperty = '';
    this.prix = +'';
    this.dateToday = new Date();
    this.userId = +'';
  }
}
