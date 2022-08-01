import {SnackbarComponent} from './snackbar.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SnackbarService} from './services/snackbar/snackbar.service';
import {SnackbarTypes} from '../../models/enum/snackbar.types';

describe('SnackbarComponent', () => {
    let snackbarService: SnackbarService;
    let fixture: ComponentFixture<SnackbarComponent>;
    let component: SnackbarComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SnackbarComponent],
            providers: [SnackbarService],
        }).compileComponents();

        snackbarService = TestBed.inject(SnackbarService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SnackbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render i', () => {
        const searchIcon = host.querySelector('i');

        expect(searchIcon).toBeTruthy();
        expect(searchIcon?.className).toEqual('far fa-xmark');
    });

    it('should have error type and show class name', () => {
        debugger;
        testDom(SnackbarTypes.Error);
    });

    it('should have warning type and show class name', () => {
        testDom(SnackbarTypes.Warning);
    });

    it('should have success type and show class name', () => {
        testDom(SnackbarTypes.Success);
    });

    it('should have info type and show class name', () => {
        testDom(SnackbarTypes.Info);
    });

    it('should set the message', () => {
        testDom(SnackbarTypes.Error, 'bad request');
    });

    // util function
    function testDom(type: SnackbarTypes, message?: string): void {
        snackbarService.show(message || 'test message', type);

        fixture.detectChanges();

        let wrapper = host.querySelector('.wrapper');
        let p = host.querySelector('p');

        expect(wrapper).toHaveClass(type);
        expect(wrapper).toHaveClass('show');
        expect(p?.innerText).toEqual(message || 'test message');
    }
});
