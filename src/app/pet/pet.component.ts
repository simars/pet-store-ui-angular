import { Component, OnInit } from '@angular/core';
import {Pet, PetService} from "../providers/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  list: Pet[];

  displayedColumns = ['id', 'name', 'status', 'category'];

  constructor(private petService : PetService) { }

  ngOnInit() {
    this.petService.getList().subscribe(
      {
        next: list => this.list = list
      }
    )
  }



}

