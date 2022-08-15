import {ExpansionListComponent} from './expansion-list.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FilterService} from '../../../../../../services/filter/filter.service';
import {GameServiceMock} from '../../../../../../mock/gameService.mock';
import {GameService} from '../../../../../../services/api/game/game.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ChangeDetectorRef} from '@angular/core';

describe('ExpansionListComponent', () => {
    let fixture: ComponentFixture<ExpansionListComponent>;
    let component: ExpansionListComponent;
    let gameServiceMock: GameServiceMock;
    let filterService: FilterService;
    let host: HTMLElement;

    beforeEach(async () => {
        gameServiceMock = new GameServiceMock();

        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ExpansionListComponent],
            providers: [FilterService, {provide: GameService, useValue: gameServiceMock}],
        }).compileComponents();

        filterService = TestBed.inject(FilterService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExpansionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        component.setPlaceholderText();

        expect(component).toBeTruthy();
    });

    it('should set genre filter', () => {
        component.changeStatus(1, true);

        expect(filterService.options.filters?.genres).toEqual([1]);
    });

    it('should unset the genre', () => {
        component.changeStatus(1, true);
        component.changeStatus(1, false);
        expect(filterService.options.filters?.genres).toEqual([]);
    });

    it('should call expand method', () => {
        component.isExpanded = false;
        const header = host.querySelector('header');

        header?.click();

        fixture.detectChanges();

        expect(component.isExpanded).toBeTrue();
    });

    it('should call expand method', () => {
        const expandMethodSpy = spyOn(component, 'expand');
        const header = host.querySelector('header');

        header?.click();

        expect(expandMethodSpy).toHaveBeenCalled();
    });

    it('should call detector', () => {
        const changeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
        const detectChangesSpy = spyOn(changeDetectorRef.constructor.prototype, 'detectChanges');

        component.expand();

        expect(detectChangesSpy).toHaveBeenCalled();
    });
});
