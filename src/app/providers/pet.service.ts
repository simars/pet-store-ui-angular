import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PetService {

  private apiUrl : string;

  constructor(private httpClient: HttpClient){
    console.log(environment);
    this.apiUrl = URL = ( <any> environment).apiBase || "";
  }

  petsList() : Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.apiUrl + '/pets');
  }
  createItem(pet) : Observable<Pet> {
    console.info(pet);
    let options = this.getHeader();
    return this.httpClient.post<Pet>(this.apiUrl + '/pets', pet, options);
  }
  updateItem(pet, petId) : Observable<Pet> {
    console.info(pet);
    let options = this.getHeader();
    return this.httpClient.put<Pet>(this.apiUrl + '/pets/' + petId, pet, options);
  }
  deleteItem(id) : Observable<void> {
    let options = this.getHeader();
    return this.httpClient.delete<void>(this.apiUrl + '/pets/' + id, options);
  }
  pet(id) : Observable<Pet> {
    return this.httpClient.get<Pet>(this.apiUrl + '/pets/' + id);
  }
  private getHeader(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return { headers: headers };
  }
  private noAuthHeader(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return { headers: headers };
  }

}

export interface Pet {
  id:Number,
  name:String
}
