import { Component, OnInit } from '@angular/core';
import {Pet, PetService} from "../providers/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet: Pet;

  private routing$:Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) { }


  ngOnInit() {
    this.routing$ = this.route.params
      .pipe(switchMap(params => this.petService.get(params["id"])))
      .subscribe(
        {
          next: pet => this.pet = pet
        }
      );
  }

}
