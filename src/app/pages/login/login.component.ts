import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../interface/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  public users: User[];
  temp: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  get() {
    this.userService.getAllUser()
      .subscribe(data => this.users = <User[]>data);
  }

  ngOnInit(): void {
    this.get();
  }

  submit(form: NgForm) {
    this.user = form.value;
    // console.log(this.user);
    // console.log(this.user.username);
    // console.log(this.user.password);
    this.temp = false;
    console.log(this.temp);

    this.users.forEach(user => {
      if (user.username == this.user.username) {
        if (user.password == this.user.password) {
          console.log("Success!!");

          console.log(user.username);

          alert("Log in success!");

          //local storage
          sessionStorage.setItem("userid", user.username);
          this.router.navigate(['']);
          this.temp = true;
          form.reset();

        }
        else {
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
