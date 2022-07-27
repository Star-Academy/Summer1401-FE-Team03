export interface LoginRequestModel {
    email: string;
    username: string;
    password: string;
}

export interface LoginResponseModel {
    id: number;
    token: string;
}
