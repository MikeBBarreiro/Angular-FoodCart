// This file is our MODEL class of Tag

//epxort makes this class accessible outside fo this file
export class Tag{

    //Read the following, to see a list fo ways to initilize properties of this object
    // below, we can use the contructor to basically initialize the key valye pair of id, and give it a value when a new food comes in.
    // OR... we can simply add the -> ! or ? (optional) <-  in id to say ..Hey! this is always going to be defined and never null
    // OR we can set a default path by doing the = 0
    // constructor(id:number){
    //     this.id = id
    // }

    // id!:number;
    // id?:number;
    // id:number = 0;

    name!:string;
    count!:number;

}