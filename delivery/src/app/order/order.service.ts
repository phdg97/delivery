import {Injectable} from '@angular/core'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { APP_API } from '../app.api';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
                private http: HttpClient) {}

    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }
    checkOrder(order: Order): Observable<any> {
        return this.http.post<Order>(`${APP_API}/orders`, order).map(order => order.id)
    }
    clear() {
        this.cartService.clear()
    }
    itemsValue(): number {
        return this.cartService.total();
    }
    orderItems(quantity: number, idOrder: number, menuId: number): Observable<any> {
        let item = {
            quantity: 0,
            orders: {id: 0},
            restaurantsItems: {id: 0}
        }

        item.quantity = quantity
        item.orders.id = idOrder
        item.restaurantsItems.id = menuId

        return this.http.post<any>(`${APP_API}/orders/items`, item).map(item => item)
    }
}
