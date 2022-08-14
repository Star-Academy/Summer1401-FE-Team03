import {GamesComponent} from './games.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('GamesComponent', () => {
    let fixture: ComponentFixture<GamesComponent>;
    let component: GamesComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GamesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GamesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
