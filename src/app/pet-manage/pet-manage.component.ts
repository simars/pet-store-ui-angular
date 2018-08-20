import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../providers/pet.service';
import {Pet} from '../model/pet-domain.model';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pet-manage',
  templateUrl: './pet-manage.component.html',
  styleUrls: ['./pet-manage.component.css']
})
export class PetManageComponent implements OnInit, OnDestroy {

  pet: Pet;

  error: any;

  private routing$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) { }


  ngOnInit() {
    this.routing$ = this.route.params
      .pipe(switchMap(params => this.petService.get(params['id'])))
      .subscribe(
        {
          next: pet => this.pet = pet
        }
      );
  }


  onPetChange(pet: Pet) {
    (pet.id ? this.petService.updatePet(pet, pet.id) : this.petService.create(pet))
      .subscribe({
        next: (data) => this.pet = data || this.pet,
        error: (error) => this.error = error,
        complete: () => this.router.navigate(['/pet', this.pet.id])
      });

  }


  ngOnDestroy() {
    this.routing$.unsubscribe();
  }
}
