import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LGBTPage } from './lgbt.page';

describe('LGBTPage', () => {
  let component: LGBTPage;
  let fixture: ComponentFixture<LGBTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LGBTPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LGBTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
