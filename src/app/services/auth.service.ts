import { CommonService } from 'src/app/services/common.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AuthGuard } from '../guards/auth.guard';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authGuard: AuthGuard,
    public http: HttpClient,
    public common: CommonService,
    public service: BaseService
  ) { }

  login(login: string, senha: string): Promise<any> {

    if (!this.service.checkNetwork()) {
      this.common.loading.dismiss();
      this.common.showToast('Sem conexão!');
    }
    else {
      const link: string = 'loginMobile';
      const headers = new HttpHeaders()
        .set("login", login)
        .set("senha", senha);

      return new Promise((resolve, reject) => {
        this.http.get<JSON>(link, { headers }).subscribe(result => {
          this.authGuard.logged = true;
          resolve(result);
          console.log(result);
        }, (error) => {
          reject(error);
          console.log(error);
        });
      });

    }
  }

}
