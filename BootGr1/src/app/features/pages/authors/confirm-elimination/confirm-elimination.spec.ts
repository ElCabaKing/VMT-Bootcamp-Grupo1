import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmElimination } from './confirm-elimination';

describe('ConfirmElimination', () => {
  let component: ConfirmElimination;
  let fixture: ComponentFixture<ConfirmElimination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmElimination],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmElimination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
