import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBilanceComponent } from './payment-bilance.component';

describe('PaymentBilanceComponent', () => {
  let component: PaymentBilanceComponent;
  let fixture: ComponentFixture<PaymentBilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentBilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentBilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
