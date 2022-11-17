import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";

@Injectable({
  providedIn: 'root'
})
export class BookTransactionService {

  path:string = 'book-transaction'

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
  }

  borrowBook(data) {
    return this.http.post(this.appConfig.apiUrl + this.path + '/borrow', data);
  }

  returnBook(data) {
    return this.http.post(this.appConfig.apiUrl + this.path + '/return/', data);
  }

}
