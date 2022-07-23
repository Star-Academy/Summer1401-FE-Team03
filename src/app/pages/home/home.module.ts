import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HeaderModule} from '../../components/header/header.module';
import {FooterModule} from '../../components/footer/footer.module';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {CardsModule} from '../../components/cards/cards.module';

@NgModule({
    declarations: [HomeComponent, SlideshowComponent],
    imports: [CommonModule, CardsModule],
})
export class HomeModule {}
