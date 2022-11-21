import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  paramId = Number(this.route.snapshot.paramMap.get('id'));
  book: Book | undefined;

  constructor(
    private bookService : BookService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.getBookDetail();
  }

  ngOnInit(): void {
  }

  getBookDetail(): void {
    this.bookService.getBookById(this.paramId)
      .subscribe(data =>{ JSON.stringify(data)
          console.log(JSON.stringify(Object(data)["output_schema"]));
          this.book = Object(data)["output_schema"];
          console.log(this.book);
        });
  }

  delete() {
    this.bookService.deleteBook(this.paramId);
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
