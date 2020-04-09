import { IUser } from 'src/app/shared/models/user.model';

export interface AuthServiceType {

    isUserActive(user: IUser): Promise<IUser>;
}
