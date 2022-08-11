import {SafeUrl} from '@angular/platform-browser';

export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    gender: boolean;
    dateOfBirth: string;
    avatar: SafeUrl;
}
