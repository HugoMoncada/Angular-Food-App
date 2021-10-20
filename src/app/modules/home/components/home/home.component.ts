import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { FoodInterface } from 'src/app/shared/types/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  foods: FoodInterface[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if(params.searchTerm){
        this.foods = this.foodService.getAll().filter( food => food.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
      }
      else if(params.tag){
        if(params.tag === "All"){
          this.router.navigateByUrl("/");
        }
        this.foods = this.foodService.getAll().filter( food => food.tags?.includes(params.tag))
      }
      else{
        this.getAllFoods();
      }
    })
  }

  search(searchTerm?: string):void {
    this.getAllFoods();
    const target = document.getElementById("search") as HTMLInputElement; 
    const searchValue = target.value; 
    this.foods = this.foods.filter( food => food.name == searchValue);
  }

  getAllFoods(){
    this.foods = this.foodService.getAll();
  }

  enterKey(event: Event){
    const target = event.target as HTMLInputElement;
    this.search(target.value)
  }
}
