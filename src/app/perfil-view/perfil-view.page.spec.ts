import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilViewPage } from './perfil-view.page';

describe('PerfilViewPage', () => {
  let component: PerfilViewPage;
  let fixture: ComponentFixture<PerfilViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
