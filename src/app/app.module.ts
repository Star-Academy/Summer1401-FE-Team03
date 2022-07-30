import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './pages/home/home.module';
import {HeaderModule} from './components/header/header.module';
import {FooterModule} from './components/footer/footer.module';
import {SnackbarModule} from './components/snackbar/snackbar.module';
import {ApiService} from './services/api/api.service';
import {AuthService} from './services/api/auth/auth.service';
import {LoginModule} from './pages/auth/login/login.module';
import {RegisterModule} from './pages/auth/register/register.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        HeaderModule,
        FooterModule,
        SnackbarModule,
        LoginModule,
        RegisterModule,
    ],
    bootstrap: [AppComponent],
    providers: [ApiService, AuthService],
})
export class AppModule {}
