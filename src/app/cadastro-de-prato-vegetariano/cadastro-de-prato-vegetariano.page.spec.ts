import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDePratoVegetarianoPage } from './cadastro-de-prato-vegetariano.page';

describe('CadastroDePratoVegetarianoPage', () => {
  let component: CadastroDePratoVegetarianoPage;
  let fixture: ComponentFixture<CadastroDePratoVegetarianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDePratoVegetarianoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDePratoVegetarianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
