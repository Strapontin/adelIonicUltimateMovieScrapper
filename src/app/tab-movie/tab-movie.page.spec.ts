import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMoviePage } from './tab-movie.page';

describe('TabMoviePage', () => {
  let component: TabMoviePage;
  let fixture: ComponentFixture<TabMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
