import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbdomensTreinoPage } from './abdomens-treino.page';

describe('AbdomensTreinoPage', () => {
  let component: AbdomensTreinoPage;
  let fixture: ComponentFixture<AbdomensTreinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbdomensTreinoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbdomensTreinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
