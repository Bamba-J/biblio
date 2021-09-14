import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookservice: BooksService) {
    
   }

  ngOnInit(): void {
      this.initForm();
  }
  onSubmit(){
      const newBook = new Book(this.bookForm.value["title"], this.bookForm.value["author"]);
      newBook.synopsis = this.bookForm.value["synopsis"];
      this.bookservice.addBook(newBook);
      
  }

  initForm(){
    this.bookForm = this.formBuilder.group({
      title :["",Validators.required],
      author:["",Validators.required],
      synopsis :["synopsis vide"]
    })
  }
}
