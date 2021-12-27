import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PizzaCrustEnum } from '../services/pizza-form.interface';

@Component({
  selector: 'app-pizza-crust-picker',
  templateUrl: './pizza-crust-picker.component.html',
  styleUrls: ['./pizza-crust-picker.component.css'],
  providers :[{
    provide: NG_VALUE_ACCESSOR,
    useExisting : forwardRef(()=>PizzaCrustPickerComponent),
    multi : true
  }]
})
export class PizzaCrustPickerComponent implements OnInit, ControlValueAccessor  {
  pizzaCrust : PizzaCrustEnum;
  PizzaCrustEnum = PizzaCrustEnum;
  
  


  changeCrust(crust: PizzaCrustEnum) {
    this.pizzaCrust = crust;
this.propagateChange(crust);
  }

  propagateChange = (value: PizzaCrustEnum) => {};
  writeValue(value: PizzaCrustEnum) {
    this.pizzaCrust = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  ngOnInit() {
  }

}
