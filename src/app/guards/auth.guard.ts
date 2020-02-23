import { CommonService } from 'src/app/services/common.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  public logged: boolean = false;

  constructor(private router: Router, public common: CommonService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (!this.logged) {
      this.common.showAlertInfo("Login necessário!")
      return this.router.navigateByUrl("/login")
    }
    else {
      return true
    }
    
  }

}
