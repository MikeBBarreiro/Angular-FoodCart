import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; //ActivateRoute is used for reading from the route. where as Router is good from WRITING into the route
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search-component',
  styleUrl: './search-component.css',
  templateUrl: './search-component.html',
})

export class SearchComponent implements OnInit{

  // searchTerm property
  searchTerm:String = '';

  //AcivatedRoute and Router are used within this component by setting them into the constructor.
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'] //this is bracket notation way. this is more dynamic.
    });
  }

  //void means we are not returning anything.
  search():void{
    if(this.searchTerm){
      //set the url
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }else{
      this.router.navigateByUrl('/')
    }
  }

}

