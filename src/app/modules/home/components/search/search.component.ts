import { Component, OnInit } from '@angular/core';
// Activated Route its for reading into the route,
// Router is for writing in the route 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })
  }

  search(): void {
    if(this.searchTerm){
      this.router.navigateByUrl("/search/" + this.searchTerm);
    }

  }
}
