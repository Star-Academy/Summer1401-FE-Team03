import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SortingComponent} from './sorting.component';
import {FilterService} from '../../../../services/filter/filter.service';
import {RouterTestingModule} from '@angular/router/testing';
import {GameService} from '../../../../services/api/game/game.service';
import {ApiService} from '../../../../services/api/api.service';
import {SnackbarService} from '../../../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../../../components/spinner/service/spinner/spinner.service';

describe('SortingComponent', () => {
    let component: SortingComponent;
    let fixture: ComponentFixture<SortingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SortingComponent],
            imports: [RouterTestingModule],
            providers: [FilterService, GameService, ApiService, SnackbarService, SpinnerService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SortingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set sort MOST_RELEVANT in default', () => {
        const result = component.selectedSortingText;
        expect(result).toEqual('مرتبط‌ترین');
    });

    it('should set sort MOST_RELEVANT - 1', () => {
        changeSort(0);

        const result = component.selectedSortingText;
        expect(result).toEqual('مرتبط‌ترین');
    });

    it('should set sort TOP_SELLER - 2', () => {
        changeSort(1);

        const result = component.selectedSortingText;
        expect(result).toEqual('پرفروش‌ترین');
    });

    it('should set sort MOST_POPULAR - 3', () => {
        changeSort(2);

        const result = component.selectedSortingText;
        expect(result).toEqual('محبوب‌ترین');
    });

    it('should set sort NEWEST - 4', () => {
        changeSort(3);

        const result = component.selectedSortingText;
        expect(result).toEqual('جدیدترین');
    });

    function changeSort(value: number): string {
        component.changeSortingFilter(value);
        fixture.detectChanges();

        if (value === 0) return 'مرتبط‌ترین';
        else if (value === 1) return 'پرفروش‌ترین';
        else if (value === 2) return 'محبوب‌ترین';
        else if (value === 3) return 'جدیدترین';

        return '';
    }
});
