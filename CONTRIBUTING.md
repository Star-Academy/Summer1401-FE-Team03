# مشارکت در پروژه لول آپ

## فهرست

| [لیست قابلیت‌هایی که باید به پروژه اضافه بشوند](#لیست-قابلیت‌هایی-که-باید-به-پروژه-اضافه-بشوند)  
| [لیست باگ‌هایی که باید رفع شوند](#لیست-باگ‌هایی-که-باید-رفع-شوند)  
| [پیش‌نیازها و مراحل راه‌اندازی و اجرای پروژه](#پیش‌نیازها-و-مراحل-راه‌اندازی-و-اجرای-پروژه)  
| [نحوه اسم گذاری کامیت‌ها](#نحوه-اسم-گذاری-کامیت‌ها)

---

## لیست قابلیت‌هایی که باید به پروژه اضافه بشوند

1- اضافه کردن پاپ‌‍‌آپ منو برای سبد خرید و پروفایل با کتابخانه ngx-popperjs و همچنین اضافه کردن تول‌تیپ به دکمه‌ها و شمار لول‌کوین  
2- اضافه کردن دکمه چپ و راست برای کامپوننت کارت و همچنین اضافه کردن کامپوننت مشاهده همه به شکل دیزاین موجود در فایل [فیگمای](https://www.figma.com/file/8HrEFNO32c3rnd2Y86na5i/level-up?node-id=0%3A1) پروژه. دکمه‌های چپ و راست برای هدایت کارت‌ها به چپ و راست کاربرد دارد تا کاربر بتواند تمام کارت‌ها را ببیند و اگر به آخر این کارت‌ها رسید، کامپوننت مشاهده همه نمایانگر می‌شود تا کاربر ترغیب به کلیک کردن آن شود.  
3- اضافه کردن کامپوننت‌های دیگر به صفحه لندینگ که در این مورد میتوانید پیشنهادهای خود را به شکل ایشو ثبت کنید

---

## لیست باگ‌هایی که باید رفع شوند

1- کارت ها به هنگام هاور کردن به زیر کانتینر اطراف خود می‌روند. البته می‌توان این ایراد را با افزودن پدینگ حل کرد اما به دنبال راه بهتری هستیم.  
2- به دنبال راهی برای چپ به راست نوشتن شماره تلفن موجود در فوتر هستیم ولی این کار باید به غیر از ادیت کردن اچ‌تی‌ام‌ال و با استفاده از direction سی‌اس‌اس صورت پذیرد که در این صورت به باگ برمی‌خوریم.

### تایپ‌اسکریپت

1- در صورت خالی گذاشتن alt برای کامپوننت کارت، برخلاف انتظار alt مقدار دیفالت را نمی‌پذیرد. همچنین در صورت استفاده از حالت no-image، نیز alt مقدار مشخص شده را نمی‌پذیرد.

---

## پیش‌نیازها و مراحل راه‌اندازی و اجرای پروژه

1- استفاده IDE [وب استورم](https://www.jetbrains.com/webstorm/)

2- نود نسخه ^12.4 و یا ^14.15 و npm مناسب با آن

3- آنگولار 12.2.1 که میتوانید با کد زیر، سی‌ال‌آی اون رو نصب کنید:

```shell
npm i -g @angular/cli@12.2.17
```

4- اضافه کردن پیکیج‌ها و آنگولار به پروژه با دستور:

```shell
npm install
```

5- [فعال کردن](https://docs.code-star.ir/docs/frontend/phase06-clean-code#ide) کد فرمترها برای پیروی از قوانین و چارچوب کدنویسی تیم

---

## نحوه اسم گذاری کامیت‌ها

[نوع کامیت همه حروف با UPPERCASE] توضیح کامیت همگی با حروف lowerCase  
مثال:

[ADD] pop-up menu to shopping cart button

لیست اسم گذاری کامیت‌ها:  
| [INIT] افزودن فایل اولیه  
| [ADD] اضافه کردن کد و یا فیچر که قبلا وجود نداشت  
| [FIX] اصلاح کردن کد و یا فیچر قبلی که ایراد داشت  
| [UPDATE] بهبود قسمتی از کد یا سند  
| [DEL] پاک کردن کد و یا فیچر قبلی