import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
// import * as mdb from 'mdb-ui-kit'; // lib

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title) {

    this.titleService.setTitle("LiMa");
  }
}
