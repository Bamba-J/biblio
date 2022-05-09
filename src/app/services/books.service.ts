import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BooksService {

  subscription!: Subscription;

 bookSubject = new Subject<any[]>();
 //[]<>=>{}@
 books : any = [
  

]
  constructor(private db : AngularFirestore, private router : Router) {

  }
  addBook(book: Book){ 
    
    this.db.collection("/publication").add({
            title: book.title,
            pseudo : book.pseudo,
            description : book.description,
            date : book.date,
            location : book.location
    }).then(()=>{
            console.log("publication ajouté")
            this.router.navigate(['books'])
    }).catch((error)=>{
            console.log(error)
    })
  }
  getBook(){
     let bookies
     this.subscription =  this.db.collection("/publication").valueChanges().subscribe((value)=>{ 
       bookies = value;
       for(let bookie of bookies ){
            this.books.push(bookie);
       }
     },
    
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("success")
       }
     ) ;

     this.emitBook();
     return this.books;
 
  }
  unsubscription(){
      this.subscription.unsubscribe()
  }
  deleteBook(){ 
    this.db.collection("/publication")
  }
  emitBook(){ 
      this.bookSubject.next(this.books.slice());
  }

}
