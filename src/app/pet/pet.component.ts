import { Component, OnInit } from '@angular/core';
import {Pet, PetService} from "../providers/pet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  list: Pet[];

  displayedColumns = ['id', 'name', 'status', 'category', 'action'];

  constructor(private petService : PetService, private router: Router) { }

  details(element: Pet) {
    this.router.navigate(["/pet",element.id])
  }


  remove(element: Pet) {
    console.log(element);
    console.log("Remove")
  }


  ngOnInit() {
    this.petService.getList()
      .subscribe(
      {
        next: list => this.list = list
      }
    )
  }



}

