import {HomeComponent} from './home.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GameService} from '../../services/api/game/game.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../../services/api/api.service';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../components/spinner/service/spinner/spinner.service';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let component: HomeComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HomeComponent],
            providers: [GameService, ApiService, SnackbarService, SpinnerService],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
