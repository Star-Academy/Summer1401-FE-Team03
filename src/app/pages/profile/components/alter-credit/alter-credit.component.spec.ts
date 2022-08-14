import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlterCreditComponent} from './alter-credit.component';

describe('AlterCreditComponent', () => {
    let component: AlterCreditComponent;
    let fixture: ComponentFixture<AlterCreditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AlterCreditComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AlterCreditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
