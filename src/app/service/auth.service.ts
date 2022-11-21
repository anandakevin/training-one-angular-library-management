import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";
import {NgxPermissionsService} from "ngx-permissions";
import {Observable, Subject} from "rxjs";
import {User} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  public role = new Subject();

  constructor(
    private http: HttpClient,
    private apiConfig: AppConfig,
    private permissionService: NgxPermissionsService
  ) { }

  users: User[];

  login(data: any) {

    if ('user' == data.username && 'user' == data.password) {

      console.log(data.username);

      localStorage.setItem("username", 'user');
      localStorage.setItem("role", 'user');

      const permission = [];
      permission.push('user');
      this.permissionService.loadPermissions(permission)
      return true;

    } else if ('admin' == data.username && 'admin' == data.password) {
      localStorage.setItem("username", 'admin');
      localStorage.setItem("role", 'admin');

      const permission = [];
      permission.push('admin');
      this.permissionService.loadPermissions(permission);
      return true;
    } else {
      return false;
    }

    this.users.forEach(user => {
      if (user.username == data.username) {
        if (user.password == data.password) {

          console.log(user.username);
          alert("Log in success!");

          //local storage
          localStorage.setItem("username", user.username);
          localStorage.setItem("role", user.role);
          const permission = [];
          permission.push(user.role);
          this.permissionService.loadPermissions(permission);

          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }

    });
  }

  logout() {
    localStorage.clear();
    this.permissionService.flushPermissions();
    return true;
  }

}
