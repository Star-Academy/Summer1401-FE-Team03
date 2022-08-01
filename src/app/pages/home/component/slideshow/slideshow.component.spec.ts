import {SlideshowComponent} from './slideshow.component';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {SlideshowItem} from '../../../../models/slidshow-item.models';

describe('SlideshowComponent', () => {
    let fixture: ComponentFixture<SlideshowComponent>;
    let component: SlideshowComponent;
    let host: HTMLElement;

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
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call changeActiveIndex method', () => {
        let changeActiveIndexMethodSpy = spyOn(component, 'changeActiveIndex');

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

    it('should have show class name', () => {
        let ol = host.querySelector('ol');
        let children = ol?.children || [];

        for (let i = 0; i < children.length; i++) {
            component.changeActiveIndex(i);

            fixture.detectChanges();

            let li = children[component.activeIndex];

            expect(li).toHaveClass('active');
        }
    });

    it('should set show class name to last item if active index < 0', () => {
        let ol = host.querySelector('ol');
        let children = ol?.children || [];

        testActiveIndex(children, -1, children.length - 1);
    });

    it('should set show class name to first item if active index >= children.length', () => {
        let ol = host.querySelector('ol');
        let children = ol?.children || [];

        testActiveIndex(children, children.length, 0);
    });

    it('should stop interval on mouseenter', () => {
        let stopSlideShowMethodSpy = spyOn(component, 'stopSlideshow');

        let slideshowElement = fixture.debugElement.query(By.css('.slideshow'));

        slideshowElement.triggerEventHandler('mouseenter', null);

        fixture.detectChanges();

        expect(stopSlideShowMethodSpy).toHaveBeenCalled();
    });

    it('should init interval on mouseleave', () => {
        let initIntervalMethodSpy = spyOn(component, 'initInterval');

        let slideshowElement = fixture.debugElement.query(By.css('.slideshow'));

        slideshowElement.triggerEventHandler('mouseleave', null);

        fixture.detectChanges();

        expect(initIntervalMethodSpy).toHaveBeenCalled();
    });

    it('should change active index after 4000 milliseconds', fakeAsync(() => {
        let currActiveIndex = component.activeIndex;

        component.initInterval();

        tick(4000);

        component.stopSlideshow();

        expect(component.activeIndex).not.toEqual(currActiveIndex);
    }));

    // utils function
    function testActiveIndex(
        children: HTMLCollection | never[],
        changeToActiveIndex: number,
        expectedActiveIndex: number
    ): void {
        component.changeActiveIndex(changeToActiveIndex);

        fixture.detectChanges();

        let li = children[component.activeIndex];

        expect(component.activeIndex).toBe(expectedActiveIndex);
        expect(li).toHaveClass('active');
    }
});
