import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/shared/models/user.model';
import { UrlsAplicationConstants } from 'src/app/shared/constants/ulrs-aplication.constans';
import { AuthServiceType } from './auth.service.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceType {

  constructor(private _http: HttpClient) { }

  public isUserActive(user: IUser): Promise<IUser>{
    return this._http.post(UrlsAplicationConstants.URL_SERVICE_IS_USER_ACTIVE, user).pipe().toPromise();
  }
}
