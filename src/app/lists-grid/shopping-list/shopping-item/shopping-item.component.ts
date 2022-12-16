import { ShoppingItem } from 'src/app/models/ShoppingItem';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() shoppingItem: ShoppingItem;

  constructor(){
    this.shoppingItem = new ShoppingItem('','');
  }
       
  ChangeStatus() {
    if (this.shoppingItem){
      this.shoppingItem.isChecked = !this.shoppingItem.isChecked;  
    }      
  }
}
