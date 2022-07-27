export interface RegisterRequestModel {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}
export interface RegisterResponseModel {
    id: number;
    token: string;
}
