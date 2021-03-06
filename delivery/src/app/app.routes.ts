import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import { AboutComponent } from './about/about.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {OrderComponent} from './order/order.component'
import { OrderCompletedComponent } from './order-completed/order-completed.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-completed', component: OrderCompletedComponent}
];
