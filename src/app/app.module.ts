import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { FormsModule } from '@angular/forms';
import {PetService} from "./providers/pet.service";
import {HttpClientModule} from "@angular/common/http";
import {PetComponent} from "./pet/pet.component";
import {PetDetailComponent} from "./pet-detail/pet-detail.component";
import {PetInputComponent} from "./pet-input/pet-input.component";

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetDetailComponent,
    PetInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
