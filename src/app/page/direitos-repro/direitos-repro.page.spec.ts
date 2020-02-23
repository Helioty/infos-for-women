import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DireitosReproPage } from './direitos-repro.page';

describe('DireitosReproPage', () => {
  let component: DireitosReproPage;
  let fixture: ComponentFixture<DireitosReproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DireitosReproPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DireitosReproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
