import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetManageComponent } from './pet-manage.component';

describe('PetManageComponent', () => {
  let component: PetManageComponent;
  let fixture: ComponentFixture<PetManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
