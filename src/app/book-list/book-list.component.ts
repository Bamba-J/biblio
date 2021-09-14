import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  
  books!: any[];

  constructor(private bookservice: BooksService) { }

  ngOnDestroy(): void {
    this.bookservice.unsubscription()
  }

  ngOnInit(): void {
      this.books = this.bookservice.getBook();
  }

  

}
