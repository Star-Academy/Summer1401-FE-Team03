import {SlideshowComponent} from './slideshow.component';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {GameImageModel} from '../../models/game/dto/gameImage.model';
import {SlideshowItem} from '../../models/slidshow-item.models';
import {FetchMock} from '../../mock/fetch.mock';
import {ImageSourceModule} from '../../pipes/image-source/image-source.module';

describe('SlideshowComponent', () => {
    let fixture: ComponentFixture<SlideshowComponent>;
    let component: SlideshowComponent;
    let host: HTMLElement;

    const TEST_IMAGES: SlideshowItem[] = [
        {image: {id: 'test src', height: 250, width: 400}, title: 'test', description: 'test'},
        {image: {id: 'test src', height: 100, width: 350}},
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ImageSourceModule],
            declarations: [SlideshowComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlideshowComponent);
        component = fixture.componentInstance;
        component.items = TEST_IMAGES;
        fixture.detectChanges();

        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call changeActiveIndex method', () => {
        const changeActiveIndexMethodSpy = spyOn(component, 'changeActiveIndex');

        const changeButtons = fixture.debugElement.queryAll(By.css('button'));

        for (const changeButton of changeButtons) {
            changeButton.triggerEventHandler('click', null);

            fixture.detectChanges();

            expect(changeActiveIndexMethodSpy).toHaveBeenCalled();
        }
    });

    it('should generate two images slideShow', () => {
        let images = fixture.debugElement.queryAll(By.css('app-slideshow-image'));

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
        component.items = TEST_IMAGES;

        let ol = host.querySelector('ol');
        fixture.detectChanges();

        let children = ol?.children || [];

        testActiveIndex(children, children.length, 0);
    });

    it('should stop interval on mouseenter', () => {
        const stopSlideShowMethodSpy = spyOn(component, 'stopSlideshow');

        const slideshowElement = fixture.debugElement.query(By.css('.slideshow'));

        slideshowElement.triggerEventHandler('mouseenter', null);

        fixture.detectChanges();

        expect(stopSlideShowMethodSpy).toHaveBeenCalled();
    });

    it('should init interval on mouseleave', () => {
        const initIntervalMethodSpy = spyOn(component, 'initNewInterval');

        const slideshowElement = fixture.debugElement.query(By.css('.slideshow'));

        slideshowElement.triggerEventHandler('mouseleave', null);

        fixture.detectChanges();

        expect(initIntervalMethodSpy).toHaveBeenCalled();
    });

    it('should change active index after 4000 milliseconds', fakeAsync(() => {
        let currActiveIndex = component.activeIndex;

        component.initNewInterval();

        tick(4000);

        component.stopSlideshow();

        expect(component.activeIndex).not.toEqual(currActiveIndex);
    }));

    // [SECTION] Utility Functions
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
