import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {CardsModule} from './cards/cards.module';

@NgModule({
    declarations: [HomeComponent, SlideshowComponent],
    imports: [CommonModule, CardsModule],
})
export class HomeModule {}
