import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetDetailComponent} from "./pet-detail/pet-detail.component";
import {PetComponent} from "./pet/pet.component";
import {PetManageComponent} from "./pet-manage/pet-manage.component";

const routes: Routes = [
  {path: '', component : PetComponent },
  {path: 'pet', component : PetComponent },
  {path: 'pet/:id', component : PetDetailComponent },
  {path: 'pet/manage/:id', component : PetManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
