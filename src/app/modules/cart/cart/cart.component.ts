import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart!: Cart;

  constructor(private cartService: CartService) { 
    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantity: string){
    this.cartService.changeQuantity(cartItem.food.id, parseInt(quantity));
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart(); 
  }

}
