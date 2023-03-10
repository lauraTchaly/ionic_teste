import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNutriPage } from './perfil-nutri.page';

describe('PerfilNutriPage', () => {
  let component: PerfilNutriPage;
  let fixture: ComponentFixture<PerfilNutriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilNutriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilNutriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
