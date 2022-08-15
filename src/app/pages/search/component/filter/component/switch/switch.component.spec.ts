import {SwitchComponent} from './switch.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('SwitchComponent', () => {
    let fixture: ComponentFixture<SwitchComponent>;
    let component: SwitchComponent;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SwitchComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SwitchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
