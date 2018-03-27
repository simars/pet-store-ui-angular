import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {IdName, Pet} from "../model/pet-domain.model";
import {MatChipInputEvent} from "@angular/material";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Observable} from "rxjs/Observable";
import {PetService} from "../providers/pet.service";

@Component({
  selector: 'app-pet-input',
  templateUrl: './pet-input.component.html',
  styleUrls: ['./pet-input.component.css']
})
export class PetInputComponent implements OnInit {

  @Input()
  pet:  Pet;

  categories: IdName[];

  @Output()
  petChange: EventEmitter<Pet>;

  separatorKeysCodes = [ENTER, COMMA];

  petForm: FormGroup;

  photoUrlsForArray: FormArray;

  tagsFormArray: FormArray;

  tagSet: IdName[];

  constructor(private fb: FormBuilder, private petService: PetService) {
    this.photoUrlsForArray = fb.array([]);
    this.tagsFormArray = fb.array([]);
    this.petChange = new EventEmitter<Pet>();
    this.petForm = fb.group({
      id: null,
      name: "",
      status: "",
      category: fb.group({
        id: null,
        name: ''
      }),
      tags: this.tagsFormArray ,
      photoUrls: this.photoUrlsForArray
    });
  }

  mapPhotoUrl(url:string) : FormControl {
    return this.fb.control(url, Validators.pattern("^https?://.*"));
  }

  mapTag(tag: IdName) : FormGroup {
    return this.fb.group({
      name: tag.name,
      id: tag.id
    });
  }

  trackBy(index, idName) {
    return idName.name;
  }


  ngOnInit() {
    this.petService.getAllCategories()
      .subscribe(
        {
          next: (value) =>
          {
            this.categories = value;
            this.onResetForm();
          }
        }
      );

  }


  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = (event.value || '').trim();

    // Add our tag
    if (value && !this.tagSet.find(tag => tag.name == value)) {
      this.tagSet.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: IdName): void {
    let index = this.tagSet.indexOf(tag);

    if (index >= 0) {
      this.tagSet.splice(index, 1);
    }
  }

  onRemovePhotoUrl(index: number) {
    this.photoUrlsForArray.removeAt(index);
  }

  onAddPhotoUrl() {
    this.photoUrlsForArray.push(this.fb.control(null));
  }


  onResetForm() {
    for(let i =0 ; i < this.tagsFormArray.length; i++) {
      this.tagsFormArray.removeAt(i);
    }
    for(let j =0 ; j < this.photoUrlsForArray.length; j++) {
      this.photoUrlsForArray.removeAt(j);
    }

    this.tagSet = this.pet.tags.slice();
    this.pet.photoUrls.map(url => this.mapPhotoUrl(url))
      .forEach((control) => this.photoUrlsForArray.push(control) );
    this.pet.tags.map(tag => this.mapTag(tag))
      .forEach((control) => this.tagsFormArray.push(control));
    this.petForm.setValue({...this.pet});
  }

  onSubmitForm() {
    this.pet  = this.petForm.value;
    this.pet.tags = this.tagSet;
    console.log(this.pet);
    this.petChange.emit(this.pet);
  }


}
