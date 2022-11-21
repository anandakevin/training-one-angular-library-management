import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../interface/user";
import {NgxPermissionsService} from "ngx-permissions";
import {HeaderComponent} from "../../layout/header/header.component";
import {Observable, Subject} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {SharedService} from "../../service/shared.service";
import {apiResponse} from "../../interface/apiResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  public users: User[];

  constructor(private userService: UserService,
              private router: Router,
              private permissionService: NgxPermissionsService,
              private authService: AuthService,
              private sharedService: SharedService,
              // private headerComponent: HeaderComponent
  ) {
  }

  get() {
    this.userService.getAllUser()
      .subscribe(data => {
        let temp = <apiResponse>data;
        this.users = <User[]>temp.output_schema;
        console.log(this.users);
      });
  }

  ngOnInit(): void {
    this.get();
  }

  submit(form: NgForm) {
    this.user = form.value;
    // let username:string;
    // if ('user' == this.user.username && 'user' == this.user.password) {
    //
    //   console.log(this.user.username);
    //
    //   localStorage.setItem("username", 'user');
    //   localStorage.setItem("role", 'user');
    //
    //   const permission = [];
    //   permission.push('user');
    //   this.permissionService.loadPermissions(permission);
    //   this.sharedService.updateStatus();
    //   // this.router.navigate(['']).then(() => {window.location.reload()});
    //   this.router.navigate(['']);
    //
    //   form.reset();
    //
    // } else if ('admin' == this.user.username && 'admin' == this.user.password) {
    //   localStorage.setItem("username", 'admin');
    //   localStorage.setItem("role", 'admin');
    //
    //   const permission = [];
    //   permission.push('admin');
    //   this.permissionService.loadPermissions(permission);
    //   this.sharedService.updateStatus();
    //   // this.router.navigate(['']).then(() => {window.location.reload()});
    //   this.router.navigate(['']);
    //   // this.router.navigateByUrl('/admin/transaction', { skipLocationChange: true }).then(() => {
    //   //   this.router.navigate(['']);
    //   // });
    //   form.reset();
    // } else {
    //   // alert("Invalid ser id or password...");
    // }

    console.log('localStorage email ' + localStorage.getItem("email"));

    this.users.forEach(user => {
      if (user.username == this.user.username) {
        if (user.password == this.user.password) {

          console.log(user.username);

          //local storage
          localStorage.setItem("username", user.username);
          localStorage.setItem("role", user.role);
          const permission = [];
          permission.push(user.role);
          this.permissionService.loadPermissions(permission);
          this.sharedService.updateStatus();

          this.router.navigate([''])
          // this.router.navigate(['']).then(() => {window.location.reload()});
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
