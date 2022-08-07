import {LoginRequestModel} from '../models/api/login-request.model';
import {API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../utils/api.utils';
import {RegisterRequestModel} from '../models/api/register-request.model';

export const VALID_TOKEN: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY1ODg4Mjc3Mn0._eFaFDUrI4JL5NS-d6f0J0dTgTyu51oc6AyoS7qHn0U';

export const VALID_USER_LOGIN_DATA: LoginRequestModel = {
    username: 'ata',
    password: '1234',
};

export const VALID_USER_REGISTER_DATA: RegisterRequestModel = {
    username: 'ata',
    password: '1234',
    email: 'ata@gmail.com',
    firstName: 'ata',
    lastName: 'faraji',
};

export const TEST_URL = '/test';

export class FetchMock {
    private static isEqual(a: any, b: any): boolean {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    private static get tokenObjectResponse(): Response {
        return new Response(JSON.stringify({id: 1, token: VALID_TOKEN}), {status: 200});
    }

    private static get IdObjectResponse(): Response {
        return new Response(JSON.stringify({id: 1}), {status: 200});
    }

    private static get errorResponse(): Response {
        return new Response(JSON.stringify({message: '', trace: ''}), {status: 500});
    }

    private static get testPostResponse(): Response {
        return new Response(JSON.stringify({isOk: true}), {status: 200});
    }

    public async fetch(url: RequestInfo, init?: RequestInit): Promise<Response> {
        if (!init || init.method === 'get') {
            if (url.toString().endsWith(TEST_URL)) return FetchMock.testPostResponse;
        } else if (init && init.body && init.method === 'post') {
            const body = JSON.parse(init.body as any);

            if (url === API_USER_LOGIN && FetchMock.isEqual(body, VALID_USER_LOGIN_DATA))
                return FetchMock.tokenObjectResponse;
            else if (url === API_USER_REGISTER && FetchMock.isEqual(body, VALID_USER_REGISTER_DATA))
                return FetchMock.tokenObjectResponse;
            else if (url === API_USER_AUTH && body.token === VALID_TOKEN) return FetchMock.IdObjectResponse;
            else if (url === TEST_URL) return FetchMock.testPostResponse;
        }

        return FetchMock.errorResponse;
    }
}
