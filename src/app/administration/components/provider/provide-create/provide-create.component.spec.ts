import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideCreateComponent } from './provide-create.component';

describe('ProvideCreateComponent', () => {
  let component: ProvideCreateComponent;
  let fixture: ComponentFixture<ProvideCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
