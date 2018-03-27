import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IdName, Pet} from "../model/pet-domain.model";
import {from} from "rxjs/observable/from";

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
    if(!id || id === "new") {
      return from([
        <Pet>{
          id: null,
          name: "",
          tags: [],
          photoUrls: [],
          category: {
            id: null,
            name: ""
          },
          status: "AVAILABLE"
        }]
      )
    }
    return this.httpClient.get<Pet>(this.apiUrl + '/pets/' + id);
  }

  create(pet) : Observable<Pet> {
    return this.httpClient.post<Pet>(this.apiUrl + '/pets', pet, this.getHeader());
  }

  updatepet(pet, petId) : Observable<Pet> {
    return this.httpClient.put<Pet>(this.apiUrl + '/pets/' + petId, pet, this.getHeader());
  }

  removePet(id) : Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + '/pets/' + id, this.getHeader());
  }

  getAllCategories() : Observable<IdName[]> {
    return this.httpClient.get<IdName>(this.apiUrl + '/pets/meta/categories')
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
