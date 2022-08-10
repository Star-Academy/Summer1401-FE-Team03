import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {HomeModule} from '../home/home.module';
import {SlideshowModule} from '../../components/slideshow/slideshow.module';
import {ImageSourceModule} from "../../pipes/image-source/image-source.module";

@NgModule({
    declarations: [GameComponent],
    imports: [CommonModule, HomeModule, SlideshowModule, ImageSourceModule],
})
export class GameModule {}
