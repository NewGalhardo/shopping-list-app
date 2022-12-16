import { MaterialModule } from './../material/material.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListColorRedDirective } from './directives/listcolor-red.directive';
import { BrCurrencyPipe } from './pipes/br-currency.pipe';
import { ShoppingItemFormComponent } from './shopping-item-form/shopping-item-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ListColorRedDirective,
    BrCurrencyPipe,
    ShoppingItemFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    ListColorRedDirective,
    BrCurrencyPipe,
    ShoppingItemFormComponent
  ]
})
export class SharedModule { }
