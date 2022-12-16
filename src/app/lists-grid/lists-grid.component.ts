import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { ShoppingList } from '../models/ShoppingList';
import { ShoppingListService } from './../services/shopping-list.service';

@Component({
  selector: 'app-lists-grid',
  templateUrl: './lists-grid.component.html',
  styleUrls: ['./lists-grid.component.css']
})
export class ListsGridComponent {
  lists: ShoppingList[] = [];

  constructor(private service: ShoppingListService, private router: Router){
    this.lists = service.getShoppingLists();
  }

  onSelect(id: number){
    this.router.navigate(['/list', id]);
}
}
