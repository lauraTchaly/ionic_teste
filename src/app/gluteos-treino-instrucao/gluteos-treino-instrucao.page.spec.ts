import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GluteosTreinoInstrucaoPage } from './gluteos-treino-instrucao.page';

describe('GluteosTreinoInstrucaoPage', () => {
  let component: GluteosTreinoInstrucaoPage;
  let fixture: ComponentFixture<GluteosTreinoInstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GluteosTreinoInstrucaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GluteosTreinoInstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
