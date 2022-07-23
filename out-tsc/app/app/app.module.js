import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { NgxPopperjsModule } from 'ngx-popperjs';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule, AppRoutingModule, HomeModule, NgxPopperjsModule, HeaderModule, FooterModule],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map