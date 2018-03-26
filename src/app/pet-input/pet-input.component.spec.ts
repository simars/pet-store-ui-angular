import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetInputComponent } from './pet-input.component';

describe('PetInputComponent', () => {
  let component: PetInputComponent;
  let fixture: ComponentFixture<PetInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
