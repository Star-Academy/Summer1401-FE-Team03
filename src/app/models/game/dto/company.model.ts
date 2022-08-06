import {GameImageModel} from './gameImage.model';
import {WebsiteModel} from './website.model';

export interface CompanyModel {
    id: number;
    country: number;
    description: string;
    logo: GameImageModel;
    name: string;
    url: string;
    websites: WebsiteModel[];
}
