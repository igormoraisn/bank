import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:  'root'
})

export  class  RestService {

  constructor(private  httpClient:  HttpClient) {}

  apiURL = 'http://localhost:8080';

  public getBalance(account: string) {
    return this.httpClient.get(`${this.apiURL}/balance/${account}`);
  }

  public makeDeposit(account: any) {
    return this.httpClient.post(`${this.apiURL}/deposit`, account);
  }

  public doWithdraw(account: any) {
    return this.httpClient.post(`${this.apiURL}/withdraw`, account);
  }
}
