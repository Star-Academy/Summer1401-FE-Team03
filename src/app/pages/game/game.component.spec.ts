import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {GameService} from '../../services/api/game/game.service';
import {ApiService} from '../../services/api/api.service';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../components/spinner/service/spinner/spinner.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';
import {JalaliCalendarModule} from '../../pipes/jalali-calendar/jalali-calendar.module';
import {AgeCategoryModule} from '../../pipes/age-category/age-category.module';
import {AgeCategoryTypeModule} from '../../pipes/age-category-type/age-category-type.module';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GameComponent],
            imports: [
                RouterTestingModule,
                ImageSourceModule,
                JalaliCalendarModule,
                AgeCategoryModule,
                AgeCategoryTypeModule,
            ],
            providers: [GameService, ApiService, SnackbarService, SpinnerService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
