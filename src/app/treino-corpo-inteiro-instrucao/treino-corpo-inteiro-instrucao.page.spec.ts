import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCorpoInteiroInstrucaoPage } from './treino-corpo-inteiro-instrucao.page';

describe('TreinoCorpoInteiroInstrucaoPage', () => {
  let component: TreinoCorpoInteiroInstrucaoPage;
  let fixture: ComponentFixture<TreinoCorpoInteiroInstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoCorpoInteiroInstrucaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoCorpoInteiroInstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
