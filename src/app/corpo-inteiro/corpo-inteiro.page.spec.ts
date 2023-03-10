import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoInteiroPage } from './corpo-inteiro.page';

describe('CorpoInteiroPage', () => {
  let component: CorpoInteiroPage;
  let fixture: ComponentFixture<CorpoInteiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpoInteiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoInteiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
