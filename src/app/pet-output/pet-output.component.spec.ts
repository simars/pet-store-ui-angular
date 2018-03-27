import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetOutputComponent } from './pet-output.component';

describe('PetOutputComponent', () => {
  let component: PetOutputComponent;
  let fixture: ComponentFixture<PetOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
