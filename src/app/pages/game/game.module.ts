import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {HomeModule} from '../home/home.module';
import {SlideshowModule} from '../../components/slideshow/slideshow.module';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';
import {JalaliCalendarModule} from '../../pipes/jalali-calendar/jalali-calendar.module';
import {AgeCategoryTypeModule} from '../../pipes/age-category-type/age-category-type.module';
import {AgeCategoryModule} from '../../pipes/age-category/age-category.module';

@NgModule({
    declarations: [GameComponent],
    imports: [
        CommonModule,
        HomeModule,
        SlideshowModule,
        ImageSourceModule,
        JalaliCalendarModule,
        AgeCategoryTypeModule,
        AgeCategoryModule,
    ],
})
export class GameModule {}
