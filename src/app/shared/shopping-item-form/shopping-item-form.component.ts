import { ShoppingListService } from '../../services/shopping-list.service';
import { Renderer2, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShoppingItem } from 'src/app/models/ShoppingItem';

@Component({
  selector: 'app-shopping-item-form',
  templateUrl: './shopping-item-form.component.html',
  styleUrls: ['./shopping-item-form.component.css']
})
export class ShoppingItemFormComponent implements OnInit{
  @Input() shoppingItem: ShoppingItem = new ShoppingItem('', '') ; 
  @Input() requestType: string = '';   
    
    shoppingItemForm?: FormGroup;
    
    constructor(private renderer: Renderer2, private service: ShoppingListService){}

    ngOnInit(){
        this.shoppingItemForm = new FormGroup({
            title: new FormControl(this.shoppingItem.title),
            quantity: new FormControl(this.shoppingItem.quantity),
            unitPrice: new FormControl(this.shoppingItem.unitPrice),
            additionalInfo: new FormControl(this.shoppingItem.additionalInfo),
            color: new FormControl(this.shoppingItem.color)
            })
    }

    onSubmitForm(){
      this.shoppingItemForm?.patchValue({
        title: this.shoppingItemForm?.controls['title'].value,
        quantity: this.shoppingItemForm?.controls['quantity'].value,
        unitPrice: this.shoppingItemForm?.controls['unitPrice'].value,
        additionalInfo: this.shoppingItemForm?.controls['additionalInfo'].value,
        color: this.shoppingItemForm?.controls['color'].value,
      })

      this.shoppingItem = {id: this.shoppingItem.id, ...this.shoppingItemForm?.value};

      if (this.requestType == 'post'){
        this.service.postShoppingItem(this.shoppingItem.id, this.shoppingItem);
      }
      else{
        //this.service.updateShoppingItem(this.shoppingList.id, this.shoppingItem.id, this.shoppingItem)
      }
    }
}
