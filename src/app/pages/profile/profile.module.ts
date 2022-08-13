import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CartComponent} from './components/cart/cart.component';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';
import {SumPricesModule} from '../../pipes/sum-prices/sum-prices.module';
import {RouterModule} from '@angular/router';
import {AlterCreditComponent} from './components/alter-credit/alter-credit.component';

@NgModule({
    declarations: [ProfileComponent, DashboardComponent, CartComponent, AlterCreditComponent],
    imports: [CommonModule, FormsModule, ImageSourceModule, SumPricesModule, RouterModule],
})
export class ProfileModule {}
