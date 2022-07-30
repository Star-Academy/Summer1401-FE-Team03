import {Component} from '@angular/core';
import {Card} from '../../models/card.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    public fetchedCards: Card[] = [
        {
            src: 'assets/card-images/goat-sim-3-compressed.webp',
            alt: 'چهار بز که یکی از اون ها جت پک داره، در حال نگاه کردن به دوربین هستند.',
            title: 'Goat Simulator 3',
            description: 'در این بازی، شما فرصت این را دارید تا در یک شبیه ساز بز، زندگی را از جانب یک بز تجربه کنید!',
            price: 288,
        },
        {
            src: 'assets/card-images/stray-compressed.webp',
            alt: 'گربه ای در محیطی سایبرپانک که بر روی بامی ایستاده و به افق نگاه میکنه و کوله ای بشت خودش داره',
            title: 'Stray',
            description:
                'زیر و بم شهر در زیر پنجه های شماست! دز این بازی از دید یک گربه به گشت و گذار در شهر می پردازیم.',
            price: 220,
        },
        {
            src: 'assets/card-images/as-dusk-falls-compressed.webp',
            alt: 'دختری در جنگل روبروی کلبه ای ایستاده. و خورشید هم در حال غروب کردنه و تم نارنجی رنگی رو به جنگل داده',
            title: 'As Dusk Falls',
            description:
                'بازی ای که در طی دو تایم لاین متفاوت و به فاصله سی سال روایت می شود و همه چیز در آخر به دزدی ای فاجعه بار در آریزونا وصل می شود',
            price: 350,
        },
        {
            src: 'assets/card-images/no-image.webp',
            alt: '',
            title: 'FIFA 23',
            description: 'فوتبال واقعی را با فیفا 23 تجربه کنید! با گیم پلی واقعی و با تیم های مردان و زنان',
            price: 120,
        },
        {
            src: 'assets/card-images/Saint-Row-compressed.webp',
            alt: 'چند جوان با چند ماشین ماسل کار قدیمی که اسلحه در دستانشون دارند و یکی از اونها روی کاپوت مشاین دراز کشیده است.',
            title: 'Saints Row',
            description:
                'سینتز رو با یه ریبوت جدید امسال برمیگرده. تو دنیای جهان باز شهر لوس ایلیو با گنگ خودتون هر کاری بخواید میتونید بکنید.',
            price: 390,
        },
    ];
}
