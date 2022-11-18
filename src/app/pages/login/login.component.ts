import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../interface/user";
import {NgxPermissionsService} from "ngx-permissions";
import {HeaderComponent} from "../../layout/header/header.component";
import {Observable, Subject} from "rxjs";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  public users: User[];
  username;

  constructor(private userService: UserService,
              private router: Router,
              private permissionService: NgxPermissionsService,
              private authService: AuthService
              // private headerComponent: HeaderComponent
  ) {
  }

  get() {
    this.userService.getAllUser()
      .subscribe(data => this.users = <User[]>data);
  }

  ngOnInit(): void {
    this.get();
  }

  submit(form: NgForm) {
    this.user = form.value;

    if ('user' == this.user.username && 'user' == this.user.password) {

      console.log(this.user.username);

      localStorage.setItem("username", 'user');
      localStorage.setItem("role", 'user');
      localStorage.setItem("email", 'user@user.com');

      const permission = [];
      permission.push('user');
      this.permissionService.loadPermissions(permission)
      this.router.navigate(['']).then(() => {window.location.reload()});
      // this.router.navigate(['']);

      form.reset();

    } else if ('admin' == this.user.username && 'admin' == this.user.password) {
      localStorage.setItem("username", 'admin');
      localStorage.setItem("role", 'admin');
      localStorage.setItem("email", 'admin@admin.com');

      const permission = [];
      permission.push('admin');
      this.permissionService.loadPermissions(permission);
      this.router.navigate(['']).then(() => {window.location.reload()});
      // this.router.navigate(['']);
      // this.router.navigateByUrl('/admin/transaction', { skipLocationChange: true }).then(() => {
      //   this.router.navigate(['']);
      // });
      form.reset();
    } else {
      // alert("Invalid ser id or password...");
    }

    console.log('localStorage email ' + localStorage.getItem("email"));

    this.users.forEach(user => {
      if (user.username == this.user.username) {
        if (user.password == this.user.password) {

          console.log(user.username);
          alert("Log in success!");

          //local storage
          localStorage.setItem("username", user.username);
          localStorage.setItem("role", user.role);
          localStorage.setItem("email", user.email);
          const permission = [];
          permission.push(user.role);
          this.permissionService.loadPermissions(permission);

          // this.router.navigate([''])
          this.router.navigate(['']).then(() => {window.location.reload()});
          form.reset();

        } else {
          alert("Invalid user id or password...");

        }
      } else {
        form.reset();
      }

    });
  }
}
