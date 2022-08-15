import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {PrimaryButtonModule} from '../../../components/primary-button/primary-button.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, RouterModule, PrimaryButtonModule],
    providers: [],
})
export class LoginModule {}
