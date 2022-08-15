import {Component} from '@angular/core';
import {NOT_FOUND_404, NOT_FOUND_DESCRIPTION, NOT_FOUND_TITLE, RETURN_HOME} from '../../languages/fa-IR/fa';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
    public notFound404: string = NOT_FOUND_404;
    public notFoundTitle: string = NOT_FOUND_TITLE;
    public notFoundDescription: string = NOT_FOUND_DESCRIPTION;
    public returnHome: string = RETURN_HOME;
}
