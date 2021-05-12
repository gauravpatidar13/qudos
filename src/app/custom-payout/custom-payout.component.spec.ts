import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPayoutComponent } from './custom-payout.component';

describe('CustomPayoutComponent', () => {
  let component: CustomPayoutComponent;
  let fixture: ComponentFixture<CustomPayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
