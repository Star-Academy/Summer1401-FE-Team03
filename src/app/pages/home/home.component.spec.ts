import {HomeComponent} from './home.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GameService} from '../../services/api/game/game.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ApiService} from '../../services/api/api.service';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {SpinnerService} from '../../components/spinner/service/spinner/spinner.service';
import {FetchMock} from '../../mock/fetch.mock';

describe('HomeComponent', () => {
    let fixture: ComponentFixture<HomeComponent>;
    let fetchMock: FetchMock;
    let component: HomeComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HomeComponent],
            providers: [GameService, ApiService, SnackbarService, SpinnerService],
        }).compileComponents();

        fetchMock = new FetchMock();
        spyOn(window, 'fetch').and.callFake(fetchMock.fetch.bind(fetchMock));
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
