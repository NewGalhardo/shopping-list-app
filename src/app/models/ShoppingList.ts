import { ShoppingItem } from './ShoppingItem';
export class ShoppingList{
    static lastId: number = 2;

    id: number;
    title: string;
    items: ShoppingItem[];
    totalCost?: number;
    color: string[];

    constructor(title: string, color: string[], items?: ShoppingItem[], totalCost?: number, id?: number){
        this.title = title;        
        this.color = color;
        this.items = items || [];
        this.totalCost = totalCost;

        this.id = id || ShoppingItem.updateLastId();
    }

    static updateLastId(id?: number) : number {
        return this.lastId++;
    }
}