export class Book{
    //photo: string;

  pseudo: string
  title: string
  date : Date
  description: string
  location : string;
  Like : number = 0;
  comment: string[] = []; 
    constructor( title: string, pseudo: string, date: Date, description: string, location: string){
        this.title = title;
        this.pseudo = pseudo;
        this.date = date;
        this.description = description;
        this.location = location;

    }
}