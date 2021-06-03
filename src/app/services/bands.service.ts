import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import {Band} from "../models/band";

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Band[]>(environment.apiUrl+"bands");
  }
  getOneByID(id:number){
    return this.httpClient.get<Band>(environment.apiUrl+"bands/"+id);
  }
  getOneByName(name:string){
    return this.httpClient.get<Band>(environment.apiUrl+"bands?name="+name);
  }
}
