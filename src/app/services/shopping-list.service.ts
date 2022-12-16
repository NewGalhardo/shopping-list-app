import { ShoppingList } from './../models/ShoppingList';
import { Injectable } from '@angular/core';

import { ShoppingItem } from '../models/ShoppingItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  sampleItems1: ShoppingItem[] = [
    new ShoppingItem("arroz branco 5kg", 'rgb(184, 197, 197)', 1, 20, "De preferência Camil"),
    new ShoppingItem("sabonete glicerina", 'rgb(184, 197, 197)', 10, 4, "NÃO pode ser Protex"),
    new ShoppingItem("LEITE de soja", 'rgb(184, 197, 197)', 15, 8, "NÃO pode ter açúcar")
  ]

  sampleItems2: ShoppingItem[] = [
    new ShoppingItem("camisa social preta", 'rgb(184, 197, 197)', 1, 20,),
    new ShoppingItem("cinto de dois lados", 'rgb(184, 197, 197)', 10, 4)      
  ]
  
  shoppingLists: ShoppingList[] = [
    new ShoppingList('Mercado', ['rgb(184, 197, 197)', 'cinza'], this.sampleItems1, 0, 1),
    new ShoppingList('Roupas sociais', ['rgb(184, 197, 197)', 'cinza'], this.sampleItems2, 0, 2)]

  constructor() {    
    
  }

  getShoppingLists(): ShoppingList[] {
    return this.shoppingLists;
  }
  
  getShoppingList(id: number): ShoppingList {
    const index = this.shoppingLists.findIndex((list) => list.id == id);
    return this.shoppingLists[index];
  }

  postShoppingList(newList: ShoppingList): void {
    this.shoppingLists.push(newList);
  }

  postShoppingItem(listId: number, newItem: ShoppingItem) {
    const index = this.shoppingLists.findIndex((list) => list.id == listId);
    this.shoppingLists[index].items.push(newItem);
  }

  updateShoppingList(listId: number, updatedShoppingList: ShoppingList) {
    const index = this.shoppingLists.findIndex((list) => list.id == listId);
    this.shoppingLists[index] = updatedShoppingList;
  }

  updateShoppingItem(listId: number, itemId: number, updatedShoppingItem: ShoppingItem) {
    const listIndex = this.shoppingLists.findIndex((list)=> list.id == listId);
    const itemIndex = this.shoppingLists[listIndex].items.findIndex((item) => item.id == itemId);
    this.shoppingLists[listIndex].items[itemIndex] = updatedShoppingItem;
  }

  deleteShoppingList(listId: number) {
    const listIndex = this.shoppingLists.findIndex((list)=> list.id == listId);
    this.shoppingLists.splice(listIndex, 1);

  }

  deleteShoppingItem(listId: number, itemId: number) {
    const listIndex = this.shoppingLists.findIndex((list)=> list.id == listId);
    const itemIndex = this.shoppingLists[listIndex].items.findIndex((item) => item.id == itemId);
    this.shoppingLists[listIndex].items.splice(itemIndex, 1);
  }
}