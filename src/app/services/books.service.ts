import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, Subscription } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable()
export class BooksService {

  subscription!: Subscription;

 bookSubject = new Subject<any[]>();
 //[]<>{}=>@
 books : any = [
  {
    title : "une si long lettre",
    author: "mariama ba"
  },
  {
    title : "une si long lettre",
    author: "mariama ba"
  },
  {
    title : "une si long lettre",
    author: "mariama ba"
  }

]
  constructor(private db : AngularFirestore) {

  }
  addBook(book: Book){ 
    
    this.db.collection("/books").add({
        title: book.title,
        author : book.author,
        synopsis : book.synopsis
    }).then(()=>{
      console.log("document ajouté")
    }).catch((error)=>{
      console.log(error)
    })
  }
  getBook(){
     let bookies
     this.subscription =  this.db.collection("/books").valueChanges().subscribe((value)=>{ 
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
    this.db.collection("/books")
  }
  emitBook(){ 
      this.bookSubject.next(this.books.slice());
  }

}
