import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SlideshowImageComponent} from './slideshow-image.component';

describe('SlideshowImageComponent', () => {
    let component: SlideshowImageComponent;
    let fixture: ComponentFixture<SlideshowImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlideshowImageComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlideshowImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
