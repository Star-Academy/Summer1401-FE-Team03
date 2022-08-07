export interface RequestOptionsModel {
    url: string;
    init?: RequestInit;
    showSnackbarOnFail?: boolean;
}

export interface PostRequestOptionModel extends RequestOptionsModel {
    body: any;
}

export interface GetRequestOptionModel extends RequestOptionsModel {}
