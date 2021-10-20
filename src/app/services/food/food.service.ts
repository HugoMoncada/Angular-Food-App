import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodInterface } from 'src/app/shared/types/food';
import { TagInterface } from 'src/app/shared/types/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): FoodInterface[]{

    return [
      {
        id: "1",
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foodPictures/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: "2",
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foodPictures/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: "3",
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foodPictures/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: "4",
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foodPictures/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: "5",
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foodPictures/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: "6",
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foodPictures/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    
    ]
  }


  getAllFoodsTags(): TagInterface[]{

    let baseTags: string [] = this.getFoodTags();
    let sortedTags: TagInterface[] = [];
    let counter = 0; 
    let totalnumberoftags = baseTags.length;


    const tag = {
      name: "All",
      quantity: totalnumberoftags
    }
    sortedTags.push(tag); 
   
    // Check if the next element in the list has the same tag name 
    // If it does add+ 1 to the counter to have the total amount of that tag name 
    // Remove it from the list to make the next iteration "faster"
    for (let i = 0; i < baseTags.length ; i++) {
      // to count the first encounter of the tag name in the list
      counter++;

      for (let j = i+1; j < baseTags.length; j++) {
        if(baseTags[i] === baseTags[j]){
          counter++;
          baseTags.splice(j, 1);
        }
      } 

      const tag = {
        name: baseTags[i],
        quantity: counter
      }
      
      sortedTags.push(tag);
      counter = 0;
    }

    return sortedTags;

  }


  private getFoodTags(): string []{
    let baseTags: string[] = [];
    
    // Getting al the tags from each food element
    this.getAll().forEach( food => {
      food.tags?.forEach( tag => {
        baseTags.push(tag);
      });
    });

    return baseTags;
  }


  getFoodById(id: string): FoodInterface{
    return this.getAll().find(food => food.id == id)!;
  }




}
