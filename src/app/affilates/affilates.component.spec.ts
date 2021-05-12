import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffilatesComponent } from './affilates.component';

describe('AffilatesComponent', () => {
  let component: AffilatesComponent;
  let fixture: ComponentFixture<AffilatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffilatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffilatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
