import { InjectionToken } from '@angular/core';

export const ServerAPIToken = new InjectionToken<string>('ServerAPI', {
  providedIn: 'root',
  factory: () => 'http://localhost:3000/'
});
export const serverAPI = 'http://localhost:3000/';
