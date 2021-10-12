import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductEditComponent } from '../components';
import { HasUnsavedChanges } from '../models/has-unsaved-changes.interface';

@Injectable({
  providedIn: 'root'
})
export class SaveChangesGuard implements CanDeactivate<HasUnsavedChanges> {
  canDeactivate(
    component: HasUnsavedChanges,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.hasUnsavedChanges ? component.hasUnsavedChanges() : true;
  }

}
