import {LoginRequestModel} from '../models/api/login/login-request.model';
import {
    API_GAME_GENRES,
    API_GAME_ONE,
    API_GAME_SEARCH,
    API_GAME_UPCOMING,
    API_LIBRARY_ADD,
    API_LIBRARY_ALL,
    API_LIBRARY_REMOVE,
    API_USER_ALTER,
    API_USER_AUTH,
    API_USER_LOGIN,
    API_USER_REGISTER,
} from '../utils/api.utils';
import {RegisterRequestModel} from '../models/api/register/register-request.model';
import {GameModel} from '../models/game/game.model';
import {User} from '../models/user.model';
import {ItemModel} from '../models/game/dto/item.model';
import {AlterRequestModel} from '../models/api/alter/alter-request.model';

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

export const VALID_USER_DATA: User = {
    id: '1',
    firstName: 'ata',
    lastName: 'faraji',
    avatar: 'test avatar',
    email: 'ata@gmail.com',
    gender: true,
    phone: '09124437644',
    password: '1234',
    username: 'ata',
    dateOfBirth: new Date('2022/23/2').toDateString(),
    credit: 1000,
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
        id: 2,
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
        id: 3,
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
export const VALID_GENRES: ItemModel[] = [
    {id: 1, name: 'genre1'},
    {id: 2, name: 'genre2'},
    {id: 3, name: 'genre3'},
    {id: 4, name: 'genre4'},
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

    private static get emptyObject(): Response {
        return new Response(JSON.stringify({}), {status: 200});
    }

    private static get errorResponse(): Response {
        return new Response(JSON.stringify({message: '', trace: ''}), {status: 500});
    }

    private static get testPostResponse(): Response {
        return new Response(JSON.stringify({isOk: true}), {status: 200});
    }

    private static get searchedGame(): Response {
        return new Response(JSON.stringify({games: VALID_GAMES_DATA}), {status: 200});
    }

    private static get genres(): Response {
        return new Response(JSON.stringify(VALID_GENRES), {status: 200});
    }

    private static get game(): Response {
        return new Response(JSON.stringify({game: VALID_GAMES_DATA[0]}), {status: 200});
    }

    private static get upComings(): Response {
        return new Response(JSON.stringify({games: VALID_GAMES_DATA}), {status: 200});
    }

    public async fetch(url: RequestInfo, init?: RequestInit): Promise<Response> {
        if (!init || init.method === 'get') {
            if (url === API_GAME_ONE) return FetchMock.game;
            else if (url === API_GAME_UPCOMING) return FetchMock.upComings;
            else if (url.toString().endsWith(TEST_URL)) return FetchMock.testPostResponse;
        } else if (init && init.body && init.method === 'post') {
            const body = JSON.parse(init.body as any);

            if (url === API_USER_LOGIN && FetchMock.isEqual(body, VALID_USER_LOGIN_DATA))
                return FetchMock.tokenObjectResponse;
            else if (url === API_USER_REGISTER && FetchMock.isEqual(body, VALID_USER_REGISTER_DATA))
                return FetchMock.tokenObjectResponse;
            else if (url === API_USER_AUTH && body.token === VALID_TOKEN) return FetchMock.IdObjectResponse;
            else if (url === API_USER_ALTER && body.token === VALID_TOKEN) return FetchMock.emptyObject;
            else if (url === API_GAME_SEARCH) return FetchMock.searchedGame;
            else if (url === API_GAME_GENRES) return FetchMock.genres;
            else if (url === API_LIBRARY_ADD) return FetchMock.emptyObject;
            else if (url === API_LIBRARY_ALL) return FetchMock.searchedGame;
            else if (url === TEST_URL) return FetchMock.testPostResponse;
        } else if (init && init.body && init.method === 'delete') {
            if (url === API_LIBRARY_REMOVE) return FetchMock.emptyObject;
        }

        return FetchMock.errorResponse;
    }
}
