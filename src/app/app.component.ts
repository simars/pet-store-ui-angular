import { Component } from '@angular/core';
import {PetService} from './providers/pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSpinner = false;
}
