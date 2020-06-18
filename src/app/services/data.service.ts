import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  getData(): Observable<Data>{
    return this.http.get<Data>("https://api.covid19india.org/data.json");
}
}
