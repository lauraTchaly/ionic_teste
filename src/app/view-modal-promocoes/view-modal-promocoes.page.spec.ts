import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModalPromocoesPage } from './view-modal-promocoes.page';

describe('ViewModalPromocoesPage', () => {
  let component: ViewModalPromocoesPage;
  let fixture: ComponentFixture<ViewModalPromocoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModalPromocoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModalPromocoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
