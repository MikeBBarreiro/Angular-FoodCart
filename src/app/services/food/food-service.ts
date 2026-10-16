import { Service, Injectable } from '@angular/core';
import {Food} from '../../shared/models/food'
import { Tag } from '../../shared/models/Tag';

@Service()

// @Injectable({
//     providedIn: 'root'
// })

export class FoodService {

    constructor(){}

    // Get all function that returns an array of strings. Clearly here is where we would either call an API or the dattabase. Maybe store the data in a cache and set a flag so the database doesnt get called muliple times?
    // getAll1():string[]{
    //     return [
    //         'images/foods/food-1.jpg',
    //         'images/foods/food-2.jpg',
    //         'images/foods/food-3.jpg',
    //         'images/foods/food-4.jpg',
    //         'images/foods/food-5.jpg',
    //         'images/foods/food-6.jpg',
    //     ]
    // }

    getFoodById(id: number): Food{ //retunring type, Food model.
        return this.getAll().find(food => food.id == id)!; // ! at end means this will not return undefined.
    }

    //this will return the food object that matches the name to the searchTerm.
    getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
        return this.getAll().filter(food => 
          // we want to filter through food
          // when the food name matches the searchTerm, please show
          food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    }

    //get tag data form server (this is mocked up here)
    getAllTags():Tag[]{
         return [
            { name: 'All', count: 14 },
            { name: 'FastFood', count: 4 },
            { name: 'Pizza', count: 2 },
            { name: 'Lunch', count: 3 },
            { name: 'SlowFood', count: 2 },
            { name: 'Hamburger', count: 1 },
            { name: 'Fry', count: 1 },
            { name: 'Soup', count: 1 },
        ];
    }

    getAllFoodsByTag(tag:string):Food[] {

        return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
       
    }

    // Get all function that returns an array of Food at the :Food[]{ ....objects designed by the Food Model in food.ts. -- Clearly here is where we would either call an API or the dattabase. Maybe store the data in a cache and set a flag so the database doesnt get called muliple times?
    getAll():Food[]{
        return [
           {
            id: 1,
            name: 'Pizza Pepperoni',
            cookTime: '10-20',
            price: 10,
            favorite: false,
            origins: ['italy'],
            stars: 4.5,
            imageUrl: 'images/foods/food-1.jpg',
            tags: ['FastFood', 'Pizza', 'Lunch'],
        },
        {
            id: 2,
            name: 'Meatball',
            price: 20,
            cookTime: '20-30',
            favorite: true,
            origins: ['persia', 'middle east', 'china'],
            stars: 4.7,
            imageUrl: 'images/foods/food-2.jpg',
            tags: ['SlowFood', 'Lunch'],
        },
        {
            id: 3,
            name: 'Hamburger',
            price: 5,
            cookTime: '10-15',
            favorite: false,
            origins: ['germany', 'us'],
            stars: 3.5,
            imageUrl: 'images/foods/food-3.jpg',
            tags: ['FastFood', 'Hamburger'],
        },
        {
            id: 4,
            name: 'Fried Potatoes',
            price: 2,
            cookTime: '15-20',
            favorite: true,
            origins: ['belgium', 'france'],
            stars: 3.3,
            imageUrl: 'images/foods/food-4.jpg',
            tags: ['FastFood', 'Fry'],
        },
        {
            id: 5,
            name: 'Chicken Soup',
            price: 11,
            cookTime: '40-50',
            favorite: false,
            origins: ['india', 'asia'],
            stars: 3.0,
            imageUrl: 'images/foods/food-5.jpg',
            tags: ['SlowFood', 'Soup'],
        },
        {
            id: 6,
            name: 'Vegetables Pizza',
            price: 9,
            cookTime: '40-50',
            favorite: false,
            origins: ['italy'],
            stars: 4.0,
            imageUrl: 'images/foods/food-6.jpg',
            tags: ['FastFood', 'Pizza', 'Lunch'],
        }
        ]
    }


}
