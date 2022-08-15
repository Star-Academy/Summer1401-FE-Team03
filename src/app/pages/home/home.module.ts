import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {CardsModule} from './component/cards/cards.module';
import {SlideshowModule} from '../../components/slideshow/slideshow.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, CardsModule, SlideshowModule],
})
export class HomeModule {}
