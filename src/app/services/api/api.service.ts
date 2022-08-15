import {Injectable} from '@angular/core';
import {POST_REQUEST_INIT} from '../../utils/api.utils';
import {SnackbarService} from '../../components/snackbar/services/snackbar/snackbar.service';
import {SnackbarTypes} from '../../models/enum/snackbar.types';
import {ApiError} from '../../models/api/error.model';
import {
    GetRequestOptionModel,
    PostRequestOptionModel,
    RequestOptionsModel,
} from '../../models/api/request-option.model';
import {SpinnerService} from '../../components/spinner/service/spinner/spinner.service';

@Injectable()
export class ApiService {
    public constructor(private snackbarService: SnackbarService, private spinnerService: SpinnerService) {}

    private static GeneratePostRequestInit(options: PostRequestOptionModel): RequestInit {
        return {
            ...POST_REQUEST_INIT,
            body: JSON.stringify(options.body),
            ...(options.init || {}),
        };
    }

    public async GetRequest<T>(options: GetRequestOptionModel): Promise<T | null> {
        return await this.fetchRequest<T>(options, options.init);
    }

    public async PostRequest<T>(options: PostRequestOptionModel): Promise<T | null> {
        const init = ApiService.GeneratePostRequestInit(options);
        return await this.fetchRequest<T>(options, init);
    }

    private async fetchRequest<T>(options: RequestOptionsModel, init?: RequestInit): Promise<T | null> {
        const {url, showSnackbarOnFail = true, showSpinnerOnFetch = false} = options;
        let response;
        if (showSpinnerOnFetch) {
            response = await this.spinnerService.wrapAsync<Promise<Response>>(async () => {
                return await fetch(url, init);
            });
        } else {
            response = await fetch(url, init);
        }

        let data;
        try {
            data = await response.json();
        } catch (e) {
            data = {} as T;
        }

        if (response.ok) return data as T;

        if (showSnackbarOnFail) this.snackbarService.show((data as ApiError).message, SnackbarTypes.Error);

        return null;
    }
}
