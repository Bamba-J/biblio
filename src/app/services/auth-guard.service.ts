import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authservice: AuthService, private router: Router){ 

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  { 
                    if(this.authservice.auth){ 
                      return true;
                    }
                    else{ 
                      
                      this.router.navigate(["auth/signin"]);
                      return false;
                    }

  }

  }
