import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBilanceComponent } from './total-bilance.component';

describe('TotalBilanceComponent', () => {
  let component: TotalBilanceComponent;
  let fixture: ComponentFixture<TotalBilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
