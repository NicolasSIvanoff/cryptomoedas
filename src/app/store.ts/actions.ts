import { createAction, props } from '@ngrx/store';
import { CoinFormatModule } from './../format/coin-format.module';

export const setCripto = createAction(
  '[App] Adiciona cripto',
  props<{ payload: string }>(),
);

export const setCriptoSuccess = createAction(
  '[App] Adiciona cripto sucesso',
  props<{ coin: CoinFormatModule }>(),
);

export const setCriptoError = createAction(
  '[App] Adiciona cripto erro',
  props<{ error: string }>(),
);
