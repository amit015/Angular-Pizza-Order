import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCrustPickerComponent } from './pizza-crust-picker.component';

describe('PizzaCrustPickerComponent', () => {
  let component: PizzaCrustPickerComponent;
  let fixture: ComponentFixture<PizzaCrustPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaCrustPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCrustPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
