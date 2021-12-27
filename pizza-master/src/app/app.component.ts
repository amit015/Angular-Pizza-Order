import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { PizzaFormService } from './components/services';
import {FormGroup, AbstractControl} from '@angular/forms';
import { PizzaFormValidatorsService } from './components/services/pizza-form-validators.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PizzaFormService, PizzaFormValidatorsService]

})
export class AppComponent {
  title = 'pizaa';

  constructor(private tService: NbSidebarService, private pfService: PizzaFormService){
 
  }

  get form(): any {
    return this.pfService.form;
  }

  get selectedPizzaGroup(): AbstractControl {
    if (!this.pfService.pizzasArray.length) { return; }

    return this.pfService.pizzasArray.at(this.form.get('selectedPizza').value);
  }
  ngOnInit(){
    this.pfService.hello();
  }
  toggle(){
    this.tService.toggle(false, 'left');
  }
  toggleCompact(){

  }
  onPizzaAdd() {
    this.pfService.addPizza();
    this.pfService.selectPizzaForEdit(this.pfService.pizzasArray.length - 1);
  }
  submit(formValue){

  }
  reset(){

  }
  onPizzaSelected(event){

  }
  onPizzaDelete(event){
    
  }
}
