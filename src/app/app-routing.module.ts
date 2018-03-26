import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetDetailComponent} from "./pet-detail/pet-detail.component";
import {PetComponent} from "./pet/pet.component";

const routes: Routes = [
  {path: '', component : PetComponent },
  {path: 'pet', component : PetComponent },
  {path: 'pet/:id', component : PetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
