import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LibraryCardComponent} from './library-card.component';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {VALID_GAMES_DATA} from '../../../../../../mock/fetch.mock';

describe('LibraryCardComponent', () => {
    let component: LibraryCardComponent;
    let fixture: ComponentFixture<LibraryCardComponent>;
    let host: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LibraryCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LibraryCardComponent);
        component = fixture.componentInstance;
        component.game = VALID_GAMES_DATA[0];
        fixture.detectChanges();

        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return new image-source', () => {
        const game = VALID_GAMES_DATA[0];
        const result = component.getImageSource(game);

        expect(result).toBe(`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.id}.jpg`);
    });

    it('should return default image-source', () => {
        const game = VALID_GAMES_DATA[3];
        const result = component.getImageSource(game);

        expect(result).toBe(`assets/card-images/no-image-compact-card.webp`);
    });
});
