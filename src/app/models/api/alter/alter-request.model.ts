import {SafeUrl} from '@angular/platform-browser';

export interface AlterRequestModel {
    token?: string;
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    gender?: boolean;
    dateOfBirth?: Date;
    avatar?: string;
    credit?: number;
}
