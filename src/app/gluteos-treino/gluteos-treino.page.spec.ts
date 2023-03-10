import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GluteosTreinoPage } from './gluteos-treino.page';

describe('GluteosTreinoPage', () => {
  let component: GluteosTreinoPage;
  let fixture: ComponentFixture<GluteosTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GluteosTreinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GluteosTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
