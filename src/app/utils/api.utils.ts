export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const API_USER_ONE = BASE_URL + '/user/one';
export const API_USER_AUTH = `${BASE_URL}/user/auth`;
export const API_USER_LOGIN = `${BASE_URL}/user/login`;
export const API_USER_REGISTER = `${BASE_URL}/user/register`;
export const API_USER_ALTER = BASE_URL + '/user/alter';

export const API_GAME_ONE = BASE_URL + '/one';
export const API_GAME_GENRES = BASE_URL + '/genres';
export const API_GAME_PLATFORMS = BASE_URL + '/platforms';
export const API_GAME_UPCOMING = BASE_URL + '/upcoming';
export const API_GAME_SEARCH = BASE_URL + '/search';

export const API_LIBRARY_ALL = BASE_URL + '/library/all';
export const API_LIBRARY_ADD = BASE_URL + '/library/add';
export const API_LIBRARY_REMOVE = BASE_URL + '/library/remove';

export const POST_REQUEST_INIT: RequestInit = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
};
