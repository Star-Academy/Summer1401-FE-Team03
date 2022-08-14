import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';
import {GameService} from '../../../../../../services/api/game/game.service';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {RouterTestingModule} from '@angular/router/testing';
import {SnackbarService} from '../../../../../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../../../../../components/spinner/service/spinner/spinner.service';
import {GameServiceMock} from '../../../../../../mock/gameService.mock';
import {SimpleChange} from '@angular/core';

describe('PaginationComponent', () => {
    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;
    let gameServiceMock: GameServiceMock;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            declarations: [PaginationComponent],
            imports: [RouterTestingModule],
            providers: [
                {provide: GameService, useValue: gameServiceMock},
                FilterService,
                SnackbarService,
                SpinnerService,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        component.pageSize = 1;
        component.totalCount = 10;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show correct pagination numbers - pages > 5', () => {
        component.selectedPage = 4;
        fixture.detectChanges();

        component.ngOnChanges({});

        const result = component.setShownPages();
        expect(result[0]).toEqual(2);
    });

    it('should show correct pagination numbers - selected page beyond pagination', () => {
        component.selectedPage = 12;
        fixture.detectChanges();

        component.ngOnChanges({});

        const result = component.setShownPages();
        expect(result).toEqual([6, 7, 8, 9, 10]);
    });

    it('should take pagination to next page', () => {
        component.nextPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(2);
    });

    it('should take pagination to next page - on end of pagination', () => {
        component.goToPage(10);

        component.ngOnChanges({});

        component.nextPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(10);
    });

    it('should take pagination to previous page', () => {
        component.selectedPage = 5;
        component.previousPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(4);
    });

    it('should take pagination to previous page - on start of pagination', () => {
        component.previousPage();
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(1);
    });

    it('should take pagination to given page number', () => {
        component.goToPage(7);
        fixture.detectChanges();

        const result = component.selectedPage;
        expect(result).toEqual(7);
    });
});
