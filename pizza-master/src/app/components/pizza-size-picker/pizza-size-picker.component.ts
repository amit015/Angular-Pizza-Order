import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR ,ControlValueAccessor } from '@angular/forms';
import { PizzaCrustEnum, PizzaSizeEnum } from '../services/pizza-form.interface';

@Component({
  selector: 'app-pizza-size-picker',
  templateUrl: './pizza-size-picker.component.html',
  styleUrls: ['./pizza-size-picker.component.css'],
  providers :[{
    provide: NG_VALUE_ACCESSOR,
    useExisting : forwardRef(()=>PizzaSizePickerComponent),
    multi : true
  }]
})
export class PizzaSizePickerComponent implements OnInit, ControlValueAccessor  {
  pizzaSize : PizzaSizeEnum;
  PizzaSizeEnum = PizzaSizeEnum;


  constructor() {  }

  changeSize(size: PizzaSizeEnum) {
    this.pizzaSize = size;
    this.propagateChange(size);
  }

  propagateChange = (value: PizzaSizeEnum) => {};
  writeValue(value: PizzaSizeEnum) {
    this.pizzaSize = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  ngOnInit() {
  }

}
