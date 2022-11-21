import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AppConfig} from "./app-config";
import { Observable } from 'rxjs';
import { Book } from '../interface/book';

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

  // getAllBook(searchQuery: string):Observable<Book[]> {
  //   console.log('GET ALL BOOK : '+this.appConfig.apiUrl +'/'+ this.path + '/get-all-' + this.path);
  //   return this.http.get(this.appConfig.apiUrl +'/'+ this.path + '/get-all-' + this.path);
  // }

  getAllBook(searchQuery: string):Observable<Book[]> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams ();
    params = params.set('bookName_like', searchQuery);
      console.log('search query ' +searchQuery);
      console.log('GET ALL BOOK : '+this.appConfig.apiUrl +'/'+ this.path + '/get-all-' + this.path);
      return this.http.get<Book[]>(this.appConfig.apiUrl +'/'+ this.path + '/get-all-' + this.path, {params : params});
    }

  getBookById(id: number) {
    return this.http.get(this.appConfig.apiUrl +'/'+ this.path + '/get-' + this.path + '-detail/' + id);
  }

  addBook(data) {
    return this.http.post(this.appConfig.apiUrl +'/'+ this.path + '/add-' + this.path, data);
  }

  updateBook(data) {
    return this.http.put(this.appConfig.apiUrl +'/'+ this.path + '/update-' + this.path, data);
  }

  deleteBook(id: number) {
    return this.http.delete(this.appConfig.apiUrl +'/'+ this.path + '/delete-' + this.path + '/' + id);
  }
}
