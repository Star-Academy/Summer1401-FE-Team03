import {LoginRequestModel} from '../models/api/login/login-request.model';
import {API_GAME_SEARCH, API_USER_AUTH, API_USER_LOGIN, API_USER_REGISTER} from '../utils/api.utils';
import {RegisterRequestModel} from '../models/api/register/register-request.model';
import {GameModel} from '../models/game/game.model';

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

export const VALID_GAMES_DATA: GameModel[] = [
    {
        id: 1,
        priceOnSale: 1500,
        price: 1700,
        cover: {id: 'test', height: 100, width: 100},
        name: 'testName',
        gameModes: [{id: 1, name: 'test mode'}],
        ageRatings: [
            {id: 1, rating: 1, category: 2},
            {id: 2, rating: 3, category: 1},
        ],
        artworks: [{id: 'test', height: 100, width: 100}],
        genres: [{id: 1, name: 'test'}],
        involvedCompanies: [
            {
                id: 1,
                porting: false,
                developer: true,
                publisher: false,
                supporting: false,
                company: {
                    id: 1,
                    url: 'test url',
                    name: 'test name',
                    description: '',
                    country: 3,
                    websites: [{id: 1, url: 'test url', category: 3, trusted: true}],
                    logo: {id: '1', width: 200, height: 300},
                },
            },
        ],
        keywords: [{id: 1, name: 'test word'}],
        platforms: [{id: 1, name: 'test plat'}],
        playerPerspectives: [{id: 1, name: 'test perspective'}],
        rating: 4,
        ratingCount: 5,
        releaseDate: 2,
        screenshots: [
            {id: '1', height: 100, width: 200},
            {id: '2', height: 100, width: 200},
        ],
        storyline: 'test',
        summary: 'test',
        themes: [
            {id: 1, name: 'test'},
            {id: 2, name: 'test'},
        ],
        videos: [
            {id: 1, name: 'test video'},
            {id: 2, name: 'test video'},
        ],
        websites: [{id: 1, url: 'test url', trusted: true, category: 1}],
    },
    {
        id: 1,
        priceOnSale: 1500,
        price: 2000,
        cover: {id: 'test', height: 100, width: 500},
        name: 'testName',
        gameModes: [{id: 1, name: 'test mode'}],
        ageRatings: [
            {id: 1, rating: 1, category: 2},
            {id: 2, rating: 3, category: 1},
        ],
        artworks: [{id: 'test', height: 100, width: 100}],
        genres: [{id: 1, name: 'test'}],
        involvedCompanies: [
            {
                id: 1,
                porting: false,
                developer: false,
                publisher: false,
                supporting: true,
                company: {
                    id: 1,
                    url: 'test url',
                    name: 'test name',
                    description: '',
                    country: 3,
                    websites: [{id: 1, url: 'test url', category: 3, trusted: true}],
                    logo: {id: '1', width: 200, height: 300},
                },
            },
        ],
        keywords: [{id: 1, name: 'test word'}],
        platforms: [{id: 1, name: 'test plat'}],
        playerPerspectives: [{id: 1, name: 'test perspective'}],
        rating: 4,
        ratingCount: 5,
        releaseDate: 2,
        screenshots: [
            {id: '1', height: 100, width: 200},
            {id: '2', height: 100, width: 200},
        ],
        storyline: 'test',
        summary: 'test',
        themes: [
            {id: 1, name: 'test'},
            {id: 2, name: 'test'},
        ],
        videos: [
            {id: 1, name: 'test video'},
            {id: 2, name: 'test video'},
        ],
        websites: [{id: 1, url: 'test url', trusted: true, category: 1}],
    },
    {
        id: 2,
        priceOnSale: 1500,
        price: 1500,
        cover: {id: 'test', height: 100, width: 100},
        name: 'testName',
        gameModes: [],
        ageRatings: [],
        artworks: [{id: 'test', height: 100, width: 100}],
        genres: [{id: 1, name: 'test'}],
        involvedCompanies: [],
        keywords: [],
        platforms: [],
        playerPerspectives: [],
        rating: 4,
        ratingCount: 5,
        releaseDate: 2,
        screenshots: [],
        storyline: 'test',
        summary: 'test',
        themes: [],
        videos: [],
        websites: [],
    },
];
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

    private static get searchedGame(): Response {
        let games: GameModel[];
        return new Response(JSON.stringify(VALID_GAMES_DATA), {status: 200});
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
            else if (url === API_GAME_SEARCH) return FetchMock.searchedGame;
            else if (url === TEST_URL) return FetchMock.testPostResponse;
        }

        return FetchMock.errorResponse;
    }
}
