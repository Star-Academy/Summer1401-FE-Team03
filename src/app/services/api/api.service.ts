import {Injectable} from '@angular/core';
import {POST_REQUEST_INIT} from '../../utils/api.utils';
import {SnackbarService} from '../snackbar/snackbar.service';
import SnackbarTypes from '../../models/enum/snackbar.types';
import ApiError from '../../models/api-error.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    public constructor(private SnackbarService: SnackbarService) {}

    public async post<T>(
        url: string,
        body: any = '',
        init: Partial<RequestInit> = {},
        showSnackbarOnFail = true
    ): Promise<T | null> {
        const response = await fetch(url, {...POST_REQUEST_INIT, body: JSON.stringify(body), ...init});
        const data = await response.json();

        if (response.ok) return data as T;
        if (showSnackbarOnFail) this.SnackbarService.show((data as ApiError).message, SnackbarTypes.Error);

        return null;
    }
}
