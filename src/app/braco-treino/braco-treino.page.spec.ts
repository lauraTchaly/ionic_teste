import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracoTreinoPage } from './braco-treino.page';

describe('BracoTreinoPage', () => {
  let component: BracoTreinoPage;
  let fixture: ComponentFixture<BracoTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracoTreinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracoTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
