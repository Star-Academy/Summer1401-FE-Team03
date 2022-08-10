export interface RequestOptionsModel {
    url: string;
    init?: RequestInit;
    showSnackbarOnFail?: boolean;
    showSpinnerOnFetch?: boolean;
}

export interface PostRequestOptionModel extends RequestOptionsModel {
    body: any;
}

export interface GetRequestOptionModel extends RequestOptionsModel {}
