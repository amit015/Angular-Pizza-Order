import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { PizzaFormService } from '../services';
import { PizzaSizeEnum, IPizzaItem, IToppingItem, PizzaCrustEnum } from '../services/pizza-form.interface';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  
  @Input() group: FormGroup;
  @Output () pizzaSelected = new EventEmitter <number>();
  @Output () addPizza = new EventEmitter();
  @Output () deletePizza = new EventEmitter<number>();
  finalTotal = 0;

  get pizzasArray(): FormArray {
    return this.group.get('pizzas') as FormArray;
  }
  
  constructor(private pizzaFormService: PizzaFormService) { }

  ngOnInit() {
  }
  getPizzaListItemClassStates(pizza: AbstractControl, index: number) {
    return {
      'PizzaList__item--active': this.group.get('selectedPizza').value === index,
      'PizzaList__item--has-error': !pizza.valid && pizza.dirty
    };
  }

  getPizzaTitle(pizza: IPizzaItem): string {
    const selectedToppings = this.pizzaFormService.getSelectedToppings((pizza.toppings as IToppingItem[]))
      .map(i => i.name);
    this.finalTotal = 0;
    const toppingsString = this.getToppingsString(selectedToppings);
    const sizeString = this.getPizzaSizeTitle(pizza.size);
    const crustString = this.getPizzaCrustTitle(pizza.crust);
    const finalTotal = this.finalTotal;
    

    return `${sizeString} pizza with crust ${crustString} and added toppings ${toppingsString}
      TOTAL COST : ${finalTotal}`;
  }

  private getToppingsString(toppings: string[]): string {
    if (!toppings || !toppings.length) return '';

    this.finalTotal = this.finalTotal + (80 * toppings.length);
    return `- ${toppings.toString()}`;
  }

  private getPizzaSizeTitle(size: PizzaSizeEnum): string {
    let pizzaSize;
    switch (size) {
      case PizzaSizeEnum.SMALL:
        pizzaSize = 'S';
        this.finalTotal = this.finalTotal + 110;
        break;
      case PizzaSizeEnum.MEDIUM:
        pizzaSize = 'M';
        this.finalTotal = this.finalTotal + 210;
        break;
      case PizzaSizeEnum.LARGE:
        pizzaSize = 'L';
        this.finalTotal = this.finalTotal + 310;
        break;
    }

    return pizzaSize;
  }

  private getPizzaCrustTitle(crust: PizzaCrustEnum): string {
    let pizzaCrust;
    switch (crust) {
      case PizzaCrustEnum.NEWHANDTOSSED:
        pizzaCrust = 'NEW HAND TOSSED';
        this.finalTotal = this.finalTotal + 110;

        break;
      case PizzaCrustEnum.WHOLEWHEATCRUST:
        pizzaCrust = 'WHOLEWHEATCRUST';
        this.finalTotal = this.finalTotal + 210;

        break;
      case PizzaCrustEnum.CHEESEBURST:
        pizzaCrust = 'CHEESEBURST';
        this.finalTotal = this.finalTotal + 310;

        break;
    }

    return pizzaCrust;
  }

}