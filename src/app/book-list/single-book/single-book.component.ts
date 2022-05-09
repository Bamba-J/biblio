import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {
   value : any
   title : any
   pseudo : any
   description :any
   date  : any
   location : any
   like : any
   comment : any
  constructor(private route: ActivatedRoute, private bookservice : BooksService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
        this.title = params['title']
        this.pseudo = params['author']
        this.description = params['synopsis']
        this.date = params['date']
        this.location = params['location']
        this.like = params['Like']
        this.comment = params['comment']
    })
    console.log(this.title)
  }

}
