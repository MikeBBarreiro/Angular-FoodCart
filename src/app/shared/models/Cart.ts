import { CartItem } from "./cartItem";

//This Class Models out the Cart Model. We only have one property of a Cart and this is
// an array of items. This array of items type is of cartItem.
//this model also handles total up the CartItems within the items array.

export class Cart{

    items:CartItem[] = [];

    get totalPrice(): number{
        let totalPrice = 0;

        this.items.forEach(item =>{
            totalPrice += item.price;
        });
        return totalPrice;
    }
}