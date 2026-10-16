import { Service } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/food';
import { CartItem } from '../../shared/models/cartItem';

@Service()


export class CartService {

    private cart:Cart = new Cart();
    
    addToCart(food:Food):void{
        
        let cartItem = this.cart.items.find(item => item.food.id === food.id)
        if(cartItem){
            this.changeQuantity(food.id, cartItem.quantity + 1)
            return;
        }
        this.cart.items.push(new CartItem(food));

    }

    removeFromCart(foodId:number):void{
        //find all the items that does not equal to the selected ID. keep everyting except the chosen id.
        this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    }

    changeQuantity(foodId:number, quantity:number){
        let cartItem = this.cart.items.find(item => item.food.id === foodId);
        if(!cartItem) return;
        cartItem.quantity = quantity;
    }

    getCart():Cart{
        return this.cart;
    }
}
