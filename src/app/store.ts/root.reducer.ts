import { ActionReducerMap } from '@ngrx/store';
import * as fromCripto from './reducer';
// import {AppState} from '../state/app.state';

export const reducers: ActionReducerMap<any> = {
  [fromCripto.featureKey]: fromCripto.reducer,
};
