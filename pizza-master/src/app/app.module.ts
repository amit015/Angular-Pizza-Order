import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';
import {AppRoutingModule} from './app-routing.module';

import { SelectedpizzaviewerComponent } from './components/selectedpizzaviewer/selectedpizzaviewer.component';
import { PizzaSizePickerComponent } from './components/pizza-size-picker/pizza-size-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PizzaCrustPickerComponent } from './components/pizza-crust-picker/pizza-crust-picker.component';

@NgModule({
  declarations: [...APP_MODULE_DECLARATIONS,
                    SelectedpizzaviewerComponent, PizzaSizePickerComponent,
                    NavbarComponent, CustomerDetailsComponent, PizzaListComponent, PizzaCrustPickerComponent],
  imports: [...APP_MODULE_IMPORTS, AppRoutingModule,
                     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
