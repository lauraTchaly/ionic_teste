import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PernaTreinoInstrucaoPage } from './perna-treino-instrucao.page';

describe('PernaTreinoInstrucaoPage', () => {
  let component: PernaTreinoInstrucaoPage;
  let fixture: ComponentFixture<PernaTreinoInstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PernaTreinoInstrucaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PernaTreinoInstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
