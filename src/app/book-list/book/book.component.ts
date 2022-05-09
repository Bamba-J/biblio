import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() index: number | undefined;
  @Input() title: String | undefined
  @Input() pseudo : String | undefined
  @Input() description : String | undefined
  @Input() date : Date | undefined
  @Input() location : String | undefined
  @Input() Like : number | undefined
  @Input() comment : String[] | undefined
  @Input() id : number | undefined
  books!: any[];


  constructor( private router: Router) { }

  ngOnDestroy(): void {
 
  }

  ngOnInit(): void {
    
      let elt = <HTMLInputElement><unknown>document.getElementById('list')
      let value = this.router
      let title = this.title
      let pseudo = this.pseudo
      let description = this.description
      let date  = this.date
      let location = this.location
      let like = this.Like
      let comment = this.comment
      

      elt.addEventListener('click', function(){
        value.navigate(['/booksSingle'], {queryParams: {title: title, pseudo: pseudo, description : description, date: date,
           location: location, like: like, comment: comment}})
      })
  }

}
