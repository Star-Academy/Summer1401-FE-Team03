import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, RouterModule],
    providers: [SnackbarService],
})
export class LoginModule {}
