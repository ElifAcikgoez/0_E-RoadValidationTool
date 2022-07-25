import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteplaningComponent } from './routeplaning.component';

describe('RouteplaningComponent', () => {
  let component: RouteplaningComponent;
  let fixture: ComponentFixture<RouteplaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteplaningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteplaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
