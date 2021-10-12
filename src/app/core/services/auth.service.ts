import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRoles: Role[] = [Role.User];

  public getRoles(): Role[] {
    return [...this.userRoles];
  }

  public addAdminRole(): void {
    this.userRoles = [Role.Admin, ... this.userRoles];
  }

  public resetAdminRole(): void {
    this.userRoles = this.userRoles.filter(role => role !== Role.Admin);
  }
}