import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../service/shared.service";
import {Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin;
  role;
  constructor(
    // private sharedService: SharedService,
    private router: Router,
    private permissionService: NgxPermissionsService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    console.log('role: ' + localStorage.getItem("role"));
    // this.sharedService.role = 'admin';
    const navStatus =
    this.updateNavbar();
  }

  updateNavbar() {
    if(localStorage.getItem('role') === null) {
      this.isLogin = false;
      this.role = "public";
    } else {
      this.isLogin = true;
      this.role = localStorage.getItem("role");

    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    this.updateNavbar();
  }


}
