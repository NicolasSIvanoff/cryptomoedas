import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ServicesService } from './../services/services.service';
import * as cripto from './actions';
import { ErrorBuilder } from './error-builder';
@Injectable()
export class CoinEffects {
  constructor(private actions$: Actions, private srvApi: ServicesService) {}

  fetchCoin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cripto.setCripto),
      mergeMap(props =>
        this.srvApi.getTickerCoin(props.payload).pipe(
          map(ticker => {
            console.log('resposta http', ticker);
            return cripto.setCriptoSuccess({ coin: ticker });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(
              cripto.setCriptoError({
                error: ErrorBuilder.genericError(error),
              }),
            );
          }),
        ),
      ),
    ),
  );
}
