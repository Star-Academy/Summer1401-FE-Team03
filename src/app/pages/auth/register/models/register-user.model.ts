import {IUserModel} from '../../models/user.model';

export interface RegisterUserModel extends IUserModel {
    firstName: string;
    lastName: string;
}
