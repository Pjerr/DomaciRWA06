import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Record[]>(environment.apiUrl+"records");
  }
  getOne(id:number){
    return this.httpClient.get<Record>(environment.apiUrl+"records/"+id);
  }
  
}
