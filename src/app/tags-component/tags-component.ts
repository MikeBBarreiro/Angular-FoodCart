import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food-service';

@Component({
  imports: [RouterLink],
  selector: 'app-tags-component',
  styleUrl: './tags-component.css',
  templateUrl: './tags-component.html',
})
export class TagsComponent {

  tags:Tag[] = [];

  @Input() //
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  //applying food service like so gives us access to the foodService & its functions in this component.
  constructor(private foodService:FoodService){

  }

  //we get all the tags form the foodService, this food service gets the data. and we inject this.tags with the data to be looped through and used.
  ngOnInit(): void{
    //if foodPageTags is not available then grab all tags.
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }

}
