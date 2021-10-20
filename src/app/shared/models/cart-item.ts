import { FoodInterface } from "../types/food";

export class CartItem {
    
    food: FoodInterface;
    quantity: number = 1;

    constructor(food: FoodInterface){
        this.food = food;
    }
    
    // property in typescript when i call price the function will be called
    get price():number{
        return this.quantity * this.food.price;
    };
}
