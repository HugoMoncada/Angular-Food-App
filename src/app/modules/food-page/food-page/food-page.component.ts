import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { FoodInterface } from 'src/app/shared/types/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {


  food! : FoodInterface; 

  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if(params.id){
        this.food = this.foodService.getFoodById(params.id);
      }
    })
  }

  addToCart(food: FoodInterface): void{
    this.cartService.addToCart(food);
    this.router.navigateByUrl("/cart");
  }

}
