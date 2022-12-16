import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


import { ShoppingItem } from './../../models/ShoppingItem';
import { ShoppingList } from './../../models/ShoppingList';
import { ShoppingListService } from './../../services/shopping-list.service';

@Component ({
    selector: 'shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent{  
    
    shoppingList: ShoppingList;
    //items: ShoppingItem[] = [];
    //listId?: number;

    constructor(private service: ShoppingListService, private route: ActivatedRoute, private router: Router){        
        let id = parseInt(this.route.snapshot.paramMap.get('id')!);
        let getList = this.service.getShoppingList(id);

        this.shoppingList = new ShoppingList(getList.title, getList.color, getList.items, getList.totalCost, getList.id);        
    }

    childColors = [
        ['branco', 'rgb(255, 255, 255)'],
        ['cinza', 'rgb(164, 187, 187)'],
        ['azul', 'rgb(32, 38, 82)'],
        ['verde', 'rgb(24, 119, 53)'],
        ['amarelo', 'rgb(204, 198, 52)'],
        ['laranja', 'rgb(138, 99, 35)'],
        ['vinho', 'rgb(68, 18, 18)']
    ]      
    
            
    changeColor(newColor: string, colorName: string){
        if(this.shoppingList){
            this.shoppingList.color[0] = newColor;
            let childColor = this.childColors.filter(c => c[0] == colorName);

            this.shoppingList.items?.forEach(item => {
            item.color = childColor[0][1];
            })
        }        
    }
   
    deleteList(id: number){
        this.service.deleteShoppingList(id);

        this.router.navigate(['']);
    }        
}