import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private http: HttpClient,
    private apiConfig: AppConfig
  ) { }
}
