import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

              @Input() index: number | undefined
              @Input() title: string | undefined
              @Input() pseudo : string | undefined
              @Input() description : string | undefined
              @Input() date : Date | undefined
              @Input() comment : string | undefined
              @Input() location : string | undefined
              @Input() Like : number | undefined
              @Input() id : number | undefined
              books : any = []

              constructor(private bookservice: BooksService, private router: Router) { 

              }

              ngOnDestroy(): void {
                this.bookservice.unsubscription()
              }

              ngOnInit(): void {
                this.books = this.bookservice.getBook()
              }

             



}
