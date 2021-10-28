import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SettingsModel } from '../models/settings.model';
import { LocalStorageService } from './local-storage.service';
import SettingsJSON from '../../../assets/app-settings.json';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  readonly storageKey = 'app-settings';

  readonly default: SettingsModel = SettingsJSON;

  constructor(
    private storage: LocalStorageService
  ) { }

  settings(): Observable<SettingsModel> {
    const fromStorage = this.storage.getData(this.storageKey);
    if (fromStorage != null) {
      const obj = <SettingsModel>JSON.parse(fromStorage);
      return of(obj);
    } else {
      this.storage.setData(this.storageKey, this.default);
      return of(this.default);
    }
  }
}
