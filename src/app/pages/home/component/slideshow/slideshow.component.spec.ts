import {SlideshowComponent} from './slideshow.component';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {SlideshowItem} from '../../../../models/slidshow-item.models';

describe('SlideshowComponent', () => {
    let fixture: ComponentFixture<SlideshowComponent>;
    let component: SlideshowComponent;
    let host: HTMLElement;

    let changeActiveIndexMethodSpy: jasmine.Spy;

    const TEST_IMAGES: SlideshowItem[] = [
        {src: 'test src', alt: 'test alt'},
        {src: 'test src', alt: 'test alt'},
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SlideshowComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlideshowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
        changeActiveIndexMethodSpy = spyOn(component, 'changeActiveIndex');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call changeActiveIndex method', () => {
        let changeButtons = fixture.debugElement.queryAll(By.css('button'));

        for (let changeButton of changeButtons) {
            changeButton.triggerEventHandler('click', null);

            fixture.detectChanges();

            expect(changeActiveIndexMethodSpy).toHaveBeenCalled();
        }
    });

    it('should generate two images slideShow', () => {
        component.items = TEST_IMAGES;

        fixture.detectChanges();

        let images = fixture.debugElement.queryAll(By.css('img'));

        expect(images.length).toEqual(TEST_IMAGES.length);
    });

    // it('should have show class name', () => {
    //     debugger;
    //
    //     let ol = host.querySelector('ol');
    //     let childs = ol?.children || [];
    //
    //     for (let i = 0; i < childs.length; i++) {
    //         component.changeActiveIndex(i);
    //
    //         fixture.detectChanges();
    //
    //         let li = childs[i];
    //
    //         expect(li).toHaveClass('active');
    //     }
    // });
});
