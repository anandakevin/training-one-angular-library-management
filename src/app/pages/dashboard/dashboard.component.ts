import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // name = 'Angular';
  // ids: Array<string> = ['one', 'two', 'three', 'four']
  // tabs: Array<string> = ['ex1-tabs-1', 'ex1-tabs-2', 'ex1-tabs-3', 'ex1-tabs-4']

  book:Book;
  books: Book[] = [];
  searchQuery: string = '';

  constructor(
    private bookService : BookService
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.bookService.getAllBook(this.searchQuery)
    .subscribe(data =>{ JSON.stringify(data)
    //.subscribe(data =>{ JSON.stringify(Object(data)["output_schema"])
    //   console.log(JSON.stringify(Object(data)["output_schema"]));
      //this.books = Object(data)["output_schema"];
      this.books = Object(data)["output_schema"];
      console.log(this.books.length);
    });


  }

}
