import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodosAntiPage } from './metodos-anti.page';

describe('MetodosAntiPage', () => {
  let component: MetodosAntiPage;
  let fixture: ComponentFixture<MetodosAntiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodosAntiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodosAntiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
