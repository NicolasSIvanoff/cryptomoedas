import { catchError } from 'rxjs/operators';
import { CoinFormatModule } from './../format/coin-format.module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  result() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}
  getTickerCoin(coin: string): Observable<CoinFormatModule> {
    return this.http.get<CoinFormatModule>(
      `https://www.mercadobitcoin.net/api/${coin}/ticker/`,
    );
    //  .pipe(catchError(error: HttpErrorResponse => error));
  }
}
