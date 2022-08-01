import {CardComponent} from './card.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

describe('CardComponent', () => {
    let fixture: ComponentFixture<CardComponent>;
    let component: CardComponent;
    let host: HTMLElement;

    // defaults
    const DEFAULT_SRC: string = 'assets/card-images/no-image.jpg';
    const DEFAULT_DESCRIPTION: string = 'توضیحات بازی';
    const DEFAULT_TITLE: string = 'بازی';
    const DEFAULT_BUTTON_TEXT: string = 'افزودن به سبد خرید';
    const DEFAULT_ALT: string = 'برای این بازی عکسی قرار داده نشده است.';

    // tests
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        host = fixture.nativeElement as HTMLElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render - default src', () => {
        testSrc();
    });

    it('should render - src', () => {
        testSrc('src test');
    });

    it('should render - default description', () => {
        testDescription();
    });

    it('should render - description', () => {
        testDescription('test description');
    });

    it('should render - default title', () => {
        testTitle();
    });

    it('should render - title', () => {
        testTitle('test title');
    });

    it('should render - default alt', () => {
        testAlt();
    });

    it('should render - alt', () => {
        testAlt('test alt');
    });

    it('should render - default price', () => {
        testPrice();
    });

    it('should render - price', () => {
        testPrice(350);
    });

    it('should render - default button text', () => {
        testButtonText();
    });

    it('should render - button text', () => {
        testButtonText('test button text');
    });

    // [SECTION] Utility Functions
    function testSrc(src?: string): void {
        if (!!src) {
            component.src = src;
            fixture.detectChanges();
        }

        expect(component).toBeTruthy();
        expect(component.src).toEqual(src || DEFAULT_SRC);
    }

    function testDescription(description?: string): void {
        if (!!description) {
            component.description = description;
            fixture.detectChanges();
        }

        expect(component).toBeTruthy();
        expect(component.description).toEqual(description || DEFAULT_DESCRIPTION);
    }

    function testTitle(title?: string): void {
        if (!!title) {
            component.title = title;
            fixture.detectChanges();
        }

        expect(component).toBeTruthy();
        expect(component.title).toEqual(title || DEFAULT_TITLE);
    }

    function testAlt(alt?: string): void {
        if (!!alt) {
            component.alt = alt;
            fixture.detectChanges();
        }

        const img = host.querySelector('img');

        expect(component).toBeTruthy();
        expect(img?.alt).toEqual(alt || DEFAULT_ALT);
    }

    function testPrice(price?: number): void {
        if (!!price) {
            component.price = price;
            fixture.detectChanges();
            expect(component.price).toEqual(price);
        }

        const coinIcon = host.querySelector('i');
        const p = host.getElementsByTagName('p')[1];

        expect(component).toBeTruthy();
        expect(coinIcon?.className).toEqual('far fa-coins icon-special');
        expect(p?.innerText).toEqual(`${price || '_'} لول کوین`);
    }

    function testButtonText(buttonText?: string): void {
        if (!!buttonText) {
            component.buttonText = buttonText;
            fixture.detectChanges();
        }

        expect(component).toBeTruthy();
        expect(component.buttonText).toEqual(buttonText || DEFAULT_BUTTON_TEXT);
    }
});
