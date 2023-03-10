import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalVeganoPage } from './view-modal-vegano.page';

describe('ViewModalVeganoPage', () => {
  let component: ViewModalVeganoPage;
  let fixture: ComponentFixture<ViewModalVeganoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModalVeganoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalVeganoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
