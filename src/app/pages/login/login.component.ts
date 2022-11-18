import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../interface/user";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  public users: User[];
  temp: boolean = false;
  username;

  constructor(private userService: UserService, private router: Router,
              private permissionService: NgxPermissionsService) {
  }

  get() {
    this.userService.getAllUser()
      .subscribe(data => this.users = <User[]>data);
  }

  ngOnInit(): void {
    this.get();
  }

  submit(form: NgForm) {
    console.log('this.user: ' + this.user);
    console.log('this.username: ' + this.username);
    this.user = form.value;
    // console.log(this.user);
    // console.log(this.user.username);
    // console.log(this.user.password);
    this.temp = false;
    console.log('form: ' + form);
    console.log('this.user: ' + this.user);
    console.log('this.user.value: ' + this.user);
    console.log(this.temp);
    console.log('user: ' + this.user.username + ' pass: ' + this.user.password);

    if ('user' == this.user.username && 'user' == this.user.password) {
      console.log("Success!!");

      console.log(this.user.username);

      alert("Log in success!");

      sessionStorage.setItem("username", 'user');
      sessionStorage.setItem("role", 'user');
      sessionStorage.setItem("email", 'user@user.com');
      this.router.navigate(['']);
      this.temp = true;
      form.reset();

    } else if ('admin' == this.user.username && 'admin' == this.user.password) {
      sessionStorage.setItem("username", 'admin');
      sessionStorage.setItem("role", 'admin');
      sessionStorage.setItem("email", 'admin@admin.com');

      alert("Log in success!");
      form.reset();
    } else {
      alert("Invalid user id or password...");
      this.temp = true;
    }

    console.log('sessionStorage email ' + sessionStorage.getItem("email"));

    this.users.forEach(user => {
      if (user.username == this.user.username) {
        if (user.password == this.user.password) {
          console.log("Success!!");

          console.log(user.username);

          alert("Log in success!");

          //local storage
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("role", user.role);
          sessionStorage.setItem("email", user.email);
          const permission = [];
          permission.push(user.role);
          // const perm = ["ADMIN", "EDITOR"];
          this.permissionService.loadPermissions(permission);

          this.router.navigate(['']);
          this.temp = true;
          form.reset();

        } else {
          alert("Invalid user id or password...");
          this.temp = true;

        }
      } else {
        form.reset();
      }

    });
    if (this.temp == false) {
      alert("Invalid user id or password...");

    }
  }
}
