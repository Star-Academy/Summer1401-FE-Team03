import {Pipe, PipeTransform} from '@angular/core';
import {InvolvedCompanyModel} from '../../models/game/dto/involvedCompany.model';

@Pipe({
    name: 'companyType',
})
export class CompanyTypePipe implements PipeTransform {
    public transform(company: InvolvedCompanyModel): string {
        if (company.developer) return 'developer';
        return 'publisher';
    }
}
