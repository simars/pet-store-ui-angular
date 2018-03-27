import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../model/pet-domain.model";

@Component({
  selector: 'app-pet-output',
  templateUrl: './pet-output.component.html',
  styleUrls: ['./pet-output.component.css']
})
export class PetOutputComponent implements OnInit {

  constructor() { }

  @Input()
  pet: Pet;

  ngOnInit() {
  }

}
