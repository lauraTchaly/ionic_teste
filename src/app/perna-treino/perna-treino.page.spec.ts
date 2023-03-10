import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PernaTreinoPage } from './perna-treino.page';

describe('PernaTreinoPage', () => {
  let component: PernaTreinoPage;
  let fixture: ComponentFixture<PernaTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PernaTreinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PernaTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
