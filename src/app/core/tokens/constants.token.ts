import { InjectionToken } from '@angular/core';
import { ConstantsModel } from '../models/constants.model';

export const constantsToken = new InjectionToken<ConstantsModel>('constants token');