export class ShoppingItem {
    static lastId: number = 5;

    id: number;
    title: string;
    quantity?: number;
    unitPrice?: number;
    additionalInfo?: string;
    isChecked?: boolean;
    color: string;

    constructor(title: string, color: string, quantity?: number, unitPrice?: number, additionalInfo?: string, isChecked?: boolean){
        this.title = title;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.additionalInfo = additionalInfo;
        this.isChecked = isChecked || false;
        this.color = color;

        this.id = ShoppingItem.updateLastId();
    }

    static updateLastId(id?: number) : number {
        return this.lastId++;
    }
}



