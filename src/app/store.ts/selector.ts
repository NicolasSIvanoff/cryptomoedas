import * as fromCripto from '../store.ts/reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCriptoState = createFeatureSelector<fromCripto.TickerState>(
  fromCripto.featureKey, //puxa o valor do state(pego no store que o reducer salvou la) da feature que eu defino aqui
);

export const getCriptoSuccess = createSelector(
  getCriptoState,
  state => state.coinState,
);

export const getError = createSelector(getCriptoState, state => state.error);
