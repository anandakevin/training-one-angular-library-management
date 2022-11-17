import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  path:string = 'book'

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
  }

  getAllBook() {
    return this.http.get(this.appConfig.apiUrl + this.path + '/get-all-' + this.path);
  }

  getBookById(id: number) {
    return this.http.get(this.appConfig.apiUrl + this.path + '/get-' + this.path + '-detail/' + id);
  }

  addBook(data) {
    return this.http.post(this.appConfig.apiUrl + this.path + '/add-' + this.path, data);
  }

  updateBook(data) {
    return this.http.put(this.appConfig.apiUrl + this.path + '/update-' + this.path, data);
  }

  deleteBook(id: number) {
    return this.http.delete(this.appConfig.apiUrl + this.path + '/delete-' + this.path + '/' + id);
  }
}
