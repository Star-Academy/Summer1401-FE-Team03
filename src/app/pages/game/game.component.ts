import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../services/api/game/game.service';
import {GameModel} from '../../models/game/game.model';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
    public game!: GameModel;

    public constructor(private route: ActivatedRoute, public gameService: GameService) {}

    public async ngOnInit(): Promise<void> {
        const idString = this.route.snapshot.paramMap.get('id');
        if (idString) {
            const id = parseInt(idString);
            this.game = await this.gameService.getGame(id);
        }
    }

    public getImageSource(type: string): string {
        if (this.game?.cover?.id) {
            return `https://images.igdb.com/igdb/image/upload/t_${type}/${this.game.cover.id}.jpg`;
        } else {
            return 'assets/card-images/no-image.webp';
        }
    }

    public getCompanyLogo(): string {
        if (this.game.involvedCompanies[0].company.logo.id) {
            return `https://images.igdb.com/igdb/image/upload/${this.game.involvedCompanies[0].company.logo.id}.jpg`;
        } else {
            return 'assets/card-images/no-image.webp';
        }
    }

    public getAgeCategoryName(): string {
        switch (this.game.ageRatings[0].category) {
            case 1:
                return 'ESRB';
            case 2:
                return 'PEGI';
            default:
                return '';
        }
    }

    public getAgeRating(): string {
        switch (this.game.ageRatings[1].rating) {
            case 1:
                return '+3 سال';
            case 2:
                return '+7 سال';
            case 3:
                return '+12 سال';
            case 4:
                return '+16 سال';
            case 5:
                return '+18 سال';
            case 6:
                return 'رده سنی مشخص نشده است.';
            case 7:
                return '+3 سال';
            case 8:
                return 'همه';
            case 9:
                return '+10 سال';
            case 10:
                return '+13 سال';
            case 11:
                return '+17 سال';
            case 12:
                return '+18 سال';
            default:
                return 'رده سنی مشخص نشده است.';
        }
    }

    public hasStory(): boolean {
        return !!this.game.storyline;
    }

    public getReleaseDate(): string {
        return new Date(this.game.releaseDate).toLocaleDateString('fa-IR');
    }
}
