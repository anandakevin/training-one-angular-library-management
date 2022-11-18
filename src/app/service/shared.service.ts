import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public role: string = "user";
  public isLogin: boolean = false;

  constructor() { }
}
