import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookModel } from 'src/app/interface/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  paramId = Number(this.route.snapshot.paramMap.get('id'));
  activity: string = '[Activity] Book';

  bookModel = new BookModel(
    '','','','',0,'','',''
  );
  submitted = false;

  constructor(
    private bookService : BookService,
    private route : ActivatedRoute,
    private location : Location
  ) {
    this.initForm();
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.processData(this.bookModel);
  }

  initForm(): void {
    if (this.paramId == 0) {
      this.activity = 'Add';
    } else {
      this.activity = 'Edit';
      this.bookService
        .getBookById(this.paramId)
        .subscribe((book) => (this.bookModel = book));
    }
  }

  goBack(): void {
    this.location.back();
  }

  processData(data: BookModel = this.bookModel): void {
    data.bookName = data.bookName.trim();
    if (!data.bookName) {
      return;
    }
    if (this.activity == 'Add') {
      this.bookService.addBook(data as Book).subscribe((book) => {
        this.goBack();
      });
    } else if (this.activity == 'Edit') {
      this.bookService
        .updateBook(data as Book, this.paramId)
        .subscribe((book) => {
          this.goBack();
        });
    }
  }

}
