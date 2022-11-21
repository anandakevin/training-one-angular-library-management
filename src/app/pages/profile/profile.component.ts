import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {SharedService} from "../../service/shared.service";
import {User} from "../../interface/user";
import {apiResponse} from "../../interface/apiResponse";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private router: Router,
              private userService: UserService,
              private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    let username = localStorage.getItem("username");
    console.log('username: ', username);

    this.userService.getUserByUsername(username).subscribe(data => {
      let temp: apiResponse = <apiResponse>data;
      this.user = <User>temp.output_schema;
      console.log('this.temp: ' + temp);
      console.log('this.user: ' + this.user);
    });

  }

}
