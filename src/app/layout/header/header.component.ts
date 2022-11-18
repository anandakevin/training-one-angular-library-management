import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../service/shared.service";
import {Router} from "@angular/router";
import {NgxPermissionsService} from "ngx-permissions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private permissionService: NgxPermissionsService
  ) {
  }

  ngOnInit(): void {
    this.sharedService.role = 'admin';
  }

  logout() {
    sessionStorage.clear();
    this.permissionService.flushPermissions();
    this.router.navigate(['login']);
  }

  isLogin = this.sharedService.isLogin;
  role = this.sharedService.role;
}
