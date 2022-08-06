import {FilterModel} from '../../game/dto/filter.model';

export interface SearchRequestModel {
    searchPhrase?: string;
    pageSize?: number;
    offset?: number;
    sort?: number;
    filters?: FilterModel;
}
