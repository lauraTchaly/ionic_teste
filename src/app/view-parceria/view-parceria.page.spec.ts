import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParceriaPage } from './view-parceria.page';

describe('ViewParceriaPage', () => {
  let component: ViewParceriaPage;
  let fixture: ComponentFixture<ViewParceriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParceriaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParceriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
