import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SnackbarService} from '../../../components/snackbar/services/snackbar/snackbar.service';
import {PrimaryButtonModule} from '../../../components/primary-button/primary-button.module';

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, FormsModule, RouterModule, PrimaryButtonModule],
    providers: [SnackbarService],
})
export class RegisterModule {}
