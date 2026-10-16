import { Food } from "./food";

export class CartItem{

    constructor(food:Food){
        //food is what is loaded in
        this.food = food;

        // this.getPrice(); //normal javascript way
        this.price; // new typescript way
    }

    food:Food;
    quantity:number = 1;

    //normal javascript way
    // getPrice():number{
    //     return this.food.price * this.quantity;
    // }

    // new type script way to GET data.
    get price():number{
        return this.food.price * this.quantity;
    }
    
}