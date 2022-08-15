import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LibraryComponent} from './library.component';
import {LibraryService} from '../../../../services/api/library/library.service';
import {LibraryServiceMock} from '../../../../mock/library.mock';

describe('LibraryComponent', () => {
    let component: LibraryComponent;
    let fixture: ComponentFixture<LibraryComponent>;
    let libraryMock: LibraryServiceMock;

    beforeEach(async () => {
        libraryMock = new LibraryServiceMock();

        await TestBed.configureTestingModule({
            declarations: [LibraryComponent],
            providers: [{provide: LibraryService, useValue: libraryMock}],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
