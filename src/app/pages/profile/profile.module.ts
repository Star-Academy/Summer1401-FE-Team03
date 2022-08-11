import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

@NgModule({
    declarations: [ProfileComponent, DashboardComponent, CartComponent, WishlistComponent],
    imports: [CommonModule, FormsModule],
})
export class ProfileModule {}
