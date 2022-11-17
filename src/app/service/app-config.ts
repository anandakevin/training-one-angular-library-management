import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  // public readonly apiUrl = '';

  public readonly localhost = 'http://localhost:';
  public readonly apiUrl = this.localhost + '8091';

  constructor() { }
}
