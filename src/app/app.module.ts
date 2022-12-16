import { ShoppingListModule } from './lists-grid/shopping-list/shopping-list.module';
import { ShoppingListComponent } from './lists-grid/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { CreateShoppingListComponent } from './create-shopping-list/create-shopping-list.component';
import { SharedModule } from './shared/shared.module';
import { ListsGridComponent } from './lists-grid/lists-grid.component';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        CreateShoppingListComponent,
        ListsGridComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ShoppingListModule,
        CommonModule,
        SharedModule
    ]
})
export class AppModule { }
