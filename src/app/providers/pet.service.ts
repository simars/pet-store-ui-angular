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


  getList() : Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.apiUrl + '/pets');
  }

  get(id) : Observable<Pet> {
    return this.httpClient.get<Pet>(this.apiUrl + '/pets/' + id);
  }

  create(pet) : Observable<Pet> {
    console.info(pet);
    let options = this.getHeader();
    return this.httpClient.post<Pet>(this.apiUrl + '/pets', pet, options);
  }

  updatepet(pet, petId) : Observable<Pet> {
    console.info(pet);
    let options = this.getHeader();
    return this.httpClient.put<Pet>(this.apiUrl + '/pets/' + petId, pet, options);
  }

  removePet(id) : Observable<void> {
    let options = this.getHeader();
    return this.httpClient.delete<void>(this.apiUrl + '/pets/' + id, options);
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
