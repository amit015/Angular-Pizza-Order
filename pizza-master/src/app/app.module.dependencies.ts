import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormContainerComponent } from './components/pizza-form-container/pizza-form-container.component';
import { NbThemeModule } from '@nebular/theme';


export const APP_MODULE_DECLARATIONS = [
  AppComponent,
  PizzaFormContainerComponent
];

export const APP_MODULE_IMPORTS = [
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  BrowserModule,
  BrowserAnimationsModule,
  NbThemeModule.forRoot(), NbSidebarModule.forRoot(), NbLayoutModule, NbButtonModule, NbEvaIconsModule, NbIconModule
];