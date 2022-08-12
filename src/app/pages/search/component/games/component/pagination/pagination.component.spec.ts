import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';
import {GameService} from '../../../../../../services/api/game/game.service';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../../../../../../services/api/api.service';
import {SnackbarService} from '../../../../../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../../../../../components/spinner/service/spinner/spinner.service';

describe('PaginationComponent', () => {
    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PaginationComponent],
            imports: [RouterTestingModule],
            providers: [GameService, FilterService, ApiService, SnackbarService, SpinnerService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show correct pagination numbers - pages = 5', () => {
        init(1, 5);

        const result = component.setShownPages();
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it('should show correct pagination numbers - pages > 5', () => {
        init(1, 10);
        component.selectedPage = 4;
        fixture.detectChanges();

        const result = component.setShownPages();
        expect(result).toEqual([2, 3, 4, 5, 6]);
    });

    it('should show correct pagination numbers - selected page beyond pagination', () => {
        init(1, 10);
        component.selectedPage = 12;
        fixture.detectChanges();

        const result = component.setShownPages();
        expect(result).toEqual([6, 7, 8, 9, 10]);
    });

    it('should take pagination to next page', () => {
        init(1, 10);
        component.nextPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(2);
    });

    it('should take pagination to next page - on end of pagination', () => {
        init(1, 10);
        component.goToPage(10);
        component.nextPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(10);
    });

    it('should take pagination to previous page', () => {
        init(1, 10);
        component.selectedPage = 5;
        component.previousPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(4);
    });

    it('should take pagination to previous page - on start of pagination', () => {
        init(1, 10);
        component.previousPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(1);
    });

    it('should take pagination to given page number', () => {
        init(1, 10);
        component.goToPage(7);
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(7);
    });

    function init(pageSize: number, totalCount: number): void {
        component.pageSize = pageSize;
        component.totalCount = totalCount;
        fixture.detectChanges();
        component.ngOnInit();
    }
});
