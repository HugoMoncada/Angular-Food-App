import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './components/tags/tags.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    FormsModule, 
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
