import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExample1Component } from './routing-example1.component';

describe('RoutingExample1Component', () => {
  let component: RoutingExample1Component;
  let fixture: ComponentFixture<RoutingExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
