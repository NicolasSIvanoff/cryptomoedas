import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CoinFormatModule } from '../format/coin-format.module';
import * as criptos from '../store.ts/actions';
import { getCriptoSuccess, getError } from '../store.ts/selector';
import { ServicesService } from './../services/services.service';
@Component({
  selector: 'app-result-api',
  templateUrl: './result-api.component.html',
  styleUrls: ['./result-api.component.scss'],
})
export class ResultApiComponent implements OnInit {
  btcData: CoinFormatModule | undefined;
  adaData: CoinFormatModule | undefined;
  ethData: CoinFormatModule | undefined;
  axsData: CoinFormatModule | undefined;
  public coin$: Observable<CoinFormatModule | null>;
  public coinError$: Observable<string>;
  public coin!: CoinFormatModule | null;
  public coinError!: string;
  subscription: Subscription[] = [];
  coinName!: string;

  constructor(public serv: ServicesService, private store: Store<any>) {
    this.coinError$ = this.store.select(getError);
    this.coin$ = this.store.select(getCriptoSuccess);
  }

  ngOnInit(): void {
    this.onStart();
    this.criptoInit();
    this.subscription.push(
      this.coin$.subscribe(data => {
        this.coin = data;
      }),
    );
  }

  fetchCoin(coin: string) {
    switch (coin) {
      case 'BTC':
        this.serv
          .getTickerCoin(coin)
          .subscribe(dados => (this.btcData = dados));
        break;
      case 'ETH':
        this.serv
          .getTickerCoin(coin)
          .subscribe(dados => (this.ethData = dados));
        break;
      case 'AXS':
        this.serv
          .getTickerCoin(coin)
          .subscribe(dados => (this.axsData = dados));
        break;
      case 'ADA':
        this.serv
          .getTickerCoin(coin)
          .subscribe(dados => (this.adaData = dados));
        break;
      default:
        break;
    }
  }
  criptoInit(coin = '') {
    this.store.dispatch(criptos.setCripto({ payload: coin }));
    this.coinName = coin.toUpperCase();
  }

  onStart() {
    setInterval(() => {
      this.fetchCoin('BTC');
      this.fetchCoin('ETH');
      this.fetchCoin('AXS');
      this.fetchCoin('ADA');
    }, 1000);
  }
}
