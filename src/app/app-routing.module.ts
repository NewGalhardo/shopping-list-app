import { ShoppingListFormComponent } from './lists-grid/shopping-list/shopping-list-form/shopping-list-form.component';
import { ShoppingListComponent } from './lists-grid/shopping-list/shopping-list.component';
import { ShoppingList } from './models/ShoppingList';
import { ShoppingListService } from './services/shopping-list.service';
import { ListsGridComponent } from './lists-grid/lists-grid.component';
import { CreateShoppingListComponent } from './create-shopping-list/create-shopping-list.component';

import { AppComponent } from './app.component';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'lists-grid', pathMatch: 'full'},
  { path: 'lists-grid', component: ListsGridComponent },
  { path: 'list/:id', component: ShoppingListComponent},
  { path: 'list/create', component: ShoppingListFormComponent },
  { path: 'list/create-item', component: CreateShoppingListComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  shoppingLists: ShoppingList[] = [];

  constructor(private service: ShoppingListService){
    this.shoppingLists = service.getShoppingLists();
  }
}
