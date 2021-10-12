import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/core/models/role';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.hasAdminRole())
    {
      return true;
    }
    // Navigate to the 403 page
    this.router.navigate(['/restricted']);
    return false;
  }

  private hasAdminRole(): boolean{
    return this.authService.getRoles().some(role => role === Role.Admin);
  }
}
