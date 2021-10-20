import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodPageComponent } from './food-page/food-page.component';
import { RatingModule } from 'ng-starrating';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FoodPageComponent,
     
  ],
  imports: [
    CommonModule,
    RatingModule,
    SharedModule
  ]
})
export class FoodPageModule { }
