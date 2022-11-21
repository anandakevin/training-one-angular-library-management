import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

type TNav = {
  isLogin: boolean;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // public role: string = 'user';
  // public isLogin: boolean = false;
  execChange: Subject<TNav> = new Subject<TNav>();

  constructor() {}

  // updateNavbar(): { isLogin: boolean, role: string } {
  //   if (localStorage.getItem('role') === null) {
  //     return { isLogin: false, role: 'public' };
  //   } else {
  //     return { isLogin: true, role: localStorage.getItem('role') };
  //   }
  // }

  /**
     * Use to change user name
     * @data type: string
     */
  updateNavbar() {
    let data: TNav;
    if (localStorage.getItem('role') === null) {
      data = { isLogin: false, role: 'public' };
    } else {
      data = { isLogin: true, role: localStorage.getItem('role') };
    }
    this.execChange.next(data);
}
}
