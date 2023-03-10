import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdomensTreinoInstrucaoPage } from './abdomens-treino-instrucao.page';

describe('AbdomensTreinoInstrucaoPage', () => {
  let component: AbdomensTreinoInstrucaoPage;
  let fixture: ComponentFixture<AbdomensTreinoInstrucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbdomensTreinoInstrucaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdomensTreinoInstrucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
