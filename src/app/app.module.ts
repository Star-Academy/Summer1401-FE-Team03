import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {SnackbarModule} from './components/snackbar/snackbar.module';
import {AuthModule} from './pages/auth/auth.module';
import {NgxPopperjsModule} from 'ngx-popperjs';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPopperjsModule,
        HomeModule,
        HeaderModule,
        FooterModule,
        SnackbarModule,
        AuthModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
