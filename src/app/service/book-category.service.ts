import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";

@Injectable({
  providedIn: 'root'
})
export class BookCategoryService {

  path:string = 'book-category'

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
  }

  getAllBookCategory() {
    return this.http.get(this.appConfig.apiUrl + this.path + '/get-all-' + this.path);
  }

  getBookCategoryById(id: number) {
    return this.http.get(this.appConfig.apiUrl + this.path + '/get-' + this.path + '-detail/' + id);
  }

  addBookCategory(data) {
    return this.http.post(this.appConfig.apiUrl + this.path + '/add-' + this.path, data);
  }

  updateBookCategory(data) {
    return this.http.put(this.appConfig.apiUrl + this.path + '/update-' + this.path, data);
  }

  deleteBookCategory(id: number) {
    return this.http.delete(this.appConfig.apiUrl + this.path + '/delete-' + this.path + '/' + id);
  }
}
