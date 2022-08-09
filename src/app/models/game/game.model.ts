import {ItemModel} from './dto/item.model';
import {AgeRatingModel} from './dto/ageRating.model';
import {GameImageModel} from './dto/gameImage.model';
import {InvolvedCompanyModel} from './dto/involvedCompany.model';
import {WebsiteModel} from './dto/website.model';

export interface GameModel {
    id: number;
    ageRatings: AgeRatingModel[];
    cover: GameImageModel;
    gameModes: ItemModel[];
    genres: ItemModel[];
    involvedCompanies: InvolvedCompanyModel[];
    keywords: ItemModel[];
    name: string;
    platforms: ItemModel[];
    playerPerspectives: ItemModel[];
    rating: number;
    ratingCount: number;
    releaseDate: number;
    screenshots: GameImageModel[];
    storyline: string;
    summary: string;
    themes: ItemModel[];
    videos: ItemModel[];
    websites: WebsiteModel[];
    price: number;
    priceOnSale: number;
}
