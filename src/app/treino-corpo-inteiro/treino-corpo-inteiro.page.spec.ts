import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoCorpoInteiroPage } from './treino-corpo-inteiro.page';

describe('TreinoCorpoInteiroPage', () => {
  let component: TreinoCorpoInteiroPage;
  let fixture: ComponentFixture<TreinoCorpoInteiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoCorpoInteiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoCorpoInteiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
