import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  get(link: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<JSON>(link).subscribe((result: any) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  post(link: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(link, body).subscribe((result: any) => {
        resolve(result);
      }, (error) => {
        reject(error)
      });
    });
  }

}
