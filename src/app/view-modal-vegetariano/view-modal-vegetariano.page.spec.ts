import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalVegetarianoPage } from './view-modal-vegetariano.page';

describe('ViewModalVegetarianoPage', () => {
  let component: ViewModalVegetarianoPage;
  let fixture: ComponentFixture<ViewModalVegetarianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModalVegetarianoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalVegetarianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
