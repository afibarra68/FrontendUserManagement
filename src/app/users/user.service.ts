import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../share/models/IUser";
import {createRequestParams} from "../../share/utils/request.util";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public queryUser(req?: any): Observable<IUser[]> {
    let params = createRequestParams(req);
    return this.http.get<IUser[]>(`${environment.END_POINT}/api/user`, { params: params })
      .pipe(map(res => {
        return res;
      }));
  }
  public queryAllUsers(req?: any): Observable<IUser[]> {
    let params = createRequestParams(req);
    return this.http.get<IUser[]>(`${environment.END_POINT}/api/bin`, { params: params })
      .pipe(map(res => {
        return res;
      }));
  }

  public saveUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.END_POINT}/api/user`, user)
      .pipe(map(res => {
        return res;
      }));
  }

  public deleteUser(id:string): Observable<String>{
    return this.http.delete<String>(`${environment.END_POINT}/api/user/f297a57a5a/${id}`)
      .pipe(map(res => {
        return res;
      }));
  }

}
