import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cart-item';
import { FoodInterface } from 'src/app/shared/types/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  
  constructor() { }

  getCart() {
    return this.cart;
  }

  addToCart(food: FoodInterface): void{
    let existInCart = this.cart.items.find( item =>  item.food.id === food.id);
    if( existInCart ){
      this.changeQuantity(food.id , (existInCart.quantity + 1));
    }
    else{
      this.cart.items.push(new CartItem(food));
    }
  }

  removeFromCart(id: string): void{
    this.cart.items = this.cart.items.filter( item => item.food.id != id); 
  }

  changeQuantity(foodId: string, quantity: number){
    let cartItem = this.cart.items.find( item =>  item.food.id === foodId);
    if(cartItem){
      cartItem.quantity = quantity;
    }
  }
 
  

}
