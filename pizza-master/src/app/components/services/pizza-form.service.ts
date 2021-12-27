import { Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { PizzaToppingsEnum, PizzaSizeEnum, IToppingItem, IPizzaFormInterface, PizzaCrustEnum } from './pizza-form.interface';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';

@Injectable()
export class PizzaFormService {
    public availableToppings = [...Object.values(PizzaToppingsEnum)];
    public form: FormGroup;

    constructor(private fb: FormBuilder , private pizzaValidatorsService: PizzaFormValidatorsService){
        this.form = this.fb.group({
            selectedPizza : null,
            pizzas : this.fb.array([]),
            customerDetails: this.fb.group({
                firstName : [null, Validators.required],
                lastName : [null, Validators.required],
                phoneNumber : [null, Validators.required],
                address : this.fb.group({
                    street : [null, Validators.required],
                    houseNum : [null, Validators.required],
                    city : [null, Validators.required],
                    floor : [null, Validators.required]
                })
            })
        }, {validators : this.pizzaValidatorsService.formValidator()})
    }
    selectPizzaForEdit(index: number) {
        this.form.get('selectedPizza').setValue(index);
    }
    get pizzasArray(): FormArray {
        return this.form.get('pizzas') as FormArray;
    }
    addPizza(): FormGroup {
        const pizzaGroup = this.getPizzaFormGroup();
        this.pizzasArray.push(this.getPizzaFormGroup());

        this.form.markAsDirty();

        return pizzaGroup;
    }
    getPizzaFormGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM, crust: PizzaCrustEnum = PizzaCrustEnum.CHEESEBURST): FormGroup {
        return this.fb.group({
          size: [size],
          crust: [crust],
          toppings: this.mapToCheckboxArrayGroup(this.availableToppings)
        }, {
          validator: this.pizzaValidatorsService.pizzaItemValidator()
        });
    }
    private mapToCheckboxArrayGroup(data: string[]): FormArray {
        return this.fb.array(data.map((i) => {
          return this.fb.group({
            name: i,
            selected: false
          });
        }));
      }
      getSelectedToppings(toppings: IToppingItem[]): IToppingItem[] {
        return toppings.filter(i => i.selected);
      }
hello(){
    console.log(this.availableToppings)
}    
get isValid(): boolean {
  if (!this.form.valid) {
    this.pizzaValidatorsService.validateAllFormFields(this.form);
    return false;
  }

  return true;
}
createPizzaOrderDto(data: IPizzaFormInterface): IPizzaFormInterface {
  const order = {
    customerDetails: data.customerDetails,
    pizzas: data.pizzas
  };

  for (const pizza of order.pizzas) {
    pizza.toppings = this.getSelectedToppings(pizza.toppings as IToppingItem[])
      .map((i) => {
        return i.name;
      });
  }

  return order;
}

}
