import { ShoppingListService } from './../../../services/shopping-list.service';
import { ShoppingList } from './../../../models/ShoppingList';
import { Component, Input, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.css']
})
export class ShoppingListFormComponent {
  @Input() shoppingList: ShoppingList = new ShoppingList('', ['rgb(186, 197, 197)', 'cinza']) ; 
  @Input() requestType: string = '';   
    
    shoppingListForm?: FormGroup;
    
    constructor(private renderer: Renderer2, private service: ShoppingListService){}

    ngOnInit(){
        this.shoppingListForm = new FormGroup({
            title: new FormControl(this.shoppingList.title),
            color: new FormControl(this.shoppingList.color),
            items: new FormControl(this.shoppingList.items),
            totalCost: new FormControl(this.shoppingList.totalCost)
            })
    }

    onSubmitForm(){
      this.shoppingListForm?.patchValue({
        title: this.shoppingListForm?.controls['title'].value,
        color: this.shoppingListForm?.controls['color'].value,
        items: this.shoppingListForm?.controls['items'].value,
        totalCost: this.shoppingListForm?.controls['totalCost'].value
      })

      this.shoppingList = {id: this.shoppingList.id, ...this.shoppingListForm?.value};

      if (this.requestType == 'post'){
        this.service.postShoppingList(this.shoppingList);
      }
      else{
        this.service.updateShoppingList(this.shoppingList.id, this.shoppingList)
      }
    }
}
