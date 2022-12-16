import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingListFormComponent } from './shopping-list-form/shopping-list-form.component';

@NgModule ({    
    declarations: [
      ShoppingItemComponent,
      ShoppingListFormComponent
    ],
    imports: [
      MaterialModule,
      CommonModule,
      SharedModule
    ],
    exports: [
      ShoppingItemComponent,
      ShoppingListFormComponent
    ]
})

export class ShoppingListModule {}