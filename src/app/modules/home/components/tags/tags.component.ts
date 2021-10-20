import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { FoodInterface } from 'src/app/shared/types/food';
import { TagInterface } from 'src/app/shared/types/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  sortedTags: TagInterface[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {
    // To show all the tags avalible and the total amount 
    this.sortedTags = this.foodService.getAllFoodsTags();
  }


  callTagsRoute(value:string){
      this.router.navigateByUrl("/tag/" + value);
  }

}
