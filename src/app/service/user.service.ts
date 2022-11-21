import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";
import { User } from '../interface/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path:string = 'user'

  constructor(
    private http: HttpClient,
    private appConfig: AppConfig
  ) {
  }

  getAllUser(){
    return this.http.get(this.appConfig.apiUrl + '/' + this.path + '/get-all-' + this.path);
  }

  getUserById(id: number) {
    return this.http.get(this.appConfig.apiUrl + '/' + this.path + '/get-' + this.path + '-detail/' + id);
  }

  addUser(data) {
    return this.http.post(this.appConfig.apiUrl + '/' + this.path + '/add-' + this.path, data);
  }

  updateUser(data) {
    return this.http.put(this.appConfig.apiUrl + '/' + this.path + '/update-' + this.path, data);
  }

  deleteUser(id: number) {
    return this.http.delete(this.appConfig.apiUrl + '/' + this.path + '/delete-' + this.path + '/' + id);
  }
}
