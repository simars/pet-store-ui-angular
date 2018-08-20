import { Component, OnInit } from '@angular/core';
import {PetService} from '../providers/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {switchMap} from 'rxjs/operators';
import {Pet} from '../model/pet-domain.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet$: Observable<Pet>;

  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) { }

  ngOnInit() {
    this.pet$ = this.route.params
      .pipe(switchMap(params => this.petService.get(params['id'])));
  }

}
