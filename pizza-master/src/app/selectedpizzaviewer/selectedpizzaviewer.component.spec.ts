import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedpizzaviewerComponent } from './selectedpizzaviewer.component';

describe('SelectedpizzaviewerComponent', () => {
  let component: SelectedpizzaviewerComponent;
  let fixture: ComponentFixture<SelectedpizzaviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedpizzaviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedpizzaviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
