import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgxPermissionsService} from 'ngx-permissions';

import {AuthService} from '../../service/auth.service';
import {SharedService} from '../../service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogin: boolean;
  role: string;

  constructor(
    private router: Router,
    private permissionService: NgxPermissionsService,
    private authService: AuthService,
    private sharedService: SharedService
  ) {
    this.sharedService.execChange.subscribe(val => {
      console.log('test val', val)
      this.updateStatus(val.isLogin, val.role);
    })
  }


  ngOnInit(): void {

    // console.log('role: ' + localStorage.getItem('role'));
    // this.updateStatus();
  }

  logout() {
    this.authService.logout();
    this.sharedService.updateStatus();
    this.router.navigate(['/login']);
    // this.updateStatus();
  }

  @HostListener('window:storage')
  onStorageChange() {
    console.log('change...');
    // console.log(localStorage.getItem('isLogin'));
    console.log(localStorage.getItem('role'));
  }

  updateStatus(isLogin: boolean, role: string) {
    this.isLogin = isLogin;
    this.role = role;
  }
}
