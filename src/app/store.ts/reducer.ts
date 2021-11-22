import { createReducer, on } from '@ngrx/store';
import * as cripto from './actions';
import { CoinFormatModule } from '../format/coin-format.module';

export const featureKey = 'cripto'; //feature seria a chave e o state o valor

export interface TickerState {
  error: string;
  coinState: CoinFormatModule | null;
}
export const initialTickerState: TickerState = {
  error: '',
  coinState: null,
};
export const reducer = createReducer<TickerState>(
  initialTickerState,
  on(cripto.setCriptoSuccess, (state, action): TickerState => {
    return {
      ...state,
      coinState: action.coin,
    };
  }),
  on(cripto.setCriptoError, (state, action): TickerState => {
    return {
      ...state,
      error: action.error,
    };
  }),
);
