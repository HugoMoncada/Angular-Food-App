import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './modules/cart/cart/cart.component';
import { FoodPageComponent } from './modules/food-page/food-page/food-page.component';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "search/:searchTerm",
    component: HomeComponent
  },
  {
    path: "tag/:tag",
    component: HomeComponent
  },
  {
    path: "food/:id",
    component: FoodPageComponent
    
  },
  {
    path: "cart",
    component: CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
