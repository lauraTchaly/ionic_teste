import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNutriPage } from './chat-nutri.page';

describe('ChatNutriPage', () => {
  let component: ChatNutriPage;
  let fixture: ComponentFixture<ChatNutriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNutriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNutriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
