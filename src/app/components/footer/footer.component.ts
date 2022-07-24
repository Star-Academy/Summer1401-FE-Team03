import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    public readonly CUSTOMER_SERVICE: string[] = [
        'پرسش های متداول',
        'شرایط استفاده',
        'رویه بازگشت کالا',
        'تخفیف ها',
        'گزارش مشکل',
    ];

    public readonly SHOPPING_GUIDE: string[] = ['واحد اعتباری فروشگاه', 'نحوه ثبت سفارش', 'نحوه تحویل سفارش'];
}
