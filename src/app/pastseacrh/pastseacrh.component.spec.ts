import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastseacrhComponent } from './pastseacrh.component';

describe('PastseacrhComponent', () => {
  let component: PastseacrhComponent;
  let fixture: ComponentFixture<PastseacrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastseacrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastseacrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
