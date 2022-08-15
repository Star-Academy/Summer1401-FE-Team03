import {CompanyModel} from './company.model';

export interface InvolvedCompanyModel {
    id: number;
    developer: boolean;
    porting: boolean;
    publisher: boolean;
    supporting: boolean;
    company: CompanyModel;
}
