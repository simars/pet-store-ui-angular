import { Component } from '@angular/core';
import {PetService} from "./providers/pet.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  constructor(private  petService : PetService) {

    this.petService.getPets().subscribe(
      {
        next: data => console.log(data)
      }
    )

  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }
}
