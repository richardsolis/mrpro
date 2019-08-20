import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendBudgetComponent } from './send-budget.component';

describe('SendBudgetComponent', () => {
  let component: SendBudgetComponent;
  let fixture: ComponentFixture<SendBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
