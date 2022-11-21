import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/service/book.service';
import {SharedService} from "../../service/shared.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  paramId = Number(this.route.snapshot.paramMap.get('id'));
  book: Book | undefined;
  role: string;
  isLogin: boolean;

  constructor(
    private bookService : BookService,
    private route: ActivatedRoute,
    private location: Location,
    private sharedService: SharedService
  ) {
    this.getBookDetail();
    this.sharedService.execChange.subscribe(val => {
      console.log('test val', val)
      this.updateStatus(val.isLogin, val.role);
    })
  }

  ngOnInit(): void {
    this.sharedService.updateStatus();
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

  updateStatus(isLogin: boolean, role: string) {
    this.isLogin = isLogin;
    this.role = role;
    console.log('updateStatus: ' + this.isLogin + ' ' + this.role);
  }

}
