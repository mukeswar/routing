import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExample3Component } from './routing-example3.component';

describe('RoutingExample3Component', () => {
  let component: RoutingExample3Component;
  let fixture: ComponentFixture<RoutingExample3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExample3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
