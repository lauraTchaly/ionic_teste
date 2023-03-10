import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracoTreinoInstrucaoPage } from './braco-treino-instrucao.page';

describe('BracoTreinoInstrucaoPage', () => {
  let component: BracoTreinoInstrucaoPage;
  let fixture: ComponentFixture<BracoTreinoInstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracoTreinoInstrucaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracoTreinoInstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
