import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  // public readonly apiUrl = '';

  public readonly localhost = 'http://localhost:';
  private readonly baseUrl = window.location.protocol + '//' + window.location.hostname;
  private port = '8091';

  public readonly apiUrl = this.baseUrl + ':' + this.port;

  constructor() { }
}
