import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-selectedpizzaviewer',
  templateUrl: './selectedpizzaviewer.component.html',
  styleUrls: ['./selectedpizzaviewer.component.css']
})
export class SelectedpizzaviewerComponent implements OnInit {

  @Input() selectedPizzaGroup: AbstractControl;
  @Output() addPizza = new EventEmitter();

  get toppingsArray(): FormArray {
    if ( !this.selectedPizzaGroup ) { return; }
    return this.selectedPizzaGroup.get('toppings') as FormArray;
  }
  constructor() { }

  ngOnInit() {

  }

}
