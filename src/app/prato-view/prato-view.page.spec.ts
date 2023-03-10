import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PratoViewPage } from './prato-view.page';

describe('PratoViewPage', () => {
  let component: PratoViewPage;
  let fixture: ComponentFixture<PratoViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PratoViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PratoViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
