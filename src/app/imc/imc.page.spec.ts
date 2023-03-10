import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcPage } from './imc.page';

describe('ImcPage', () => {
  let component: ImcPage;
  let fixture: ComponentFixture<ImcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});