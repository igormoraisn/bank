import {
  Component,
  OnInit
} from '@angular/core';
import { RestService } from '../../rest.service';


@Component({
  selector: 'app-get-balance',
  templateUrl: './get-balance.component.html',
  styleUrls: ['./get-balance.component.scss']
})
export class BalanceComponent implements OnInit {
  account: string;
  successMessagebool: boolean;
  successMessage: string;
  failedMessagebool: boolean;
  failedMessage: string;
  constructor(public rest: RestService) {
    
  }

  ngOnInit() {
    this.clearData();
  }

  clearData() {
    this.account = '';
    this.successMessagebool = false;
    this.failedMessagebool = false;
  }

  isFormValid() {
    return this.account !== ''; 
  }

  getBalance() {
    this.successMessagebool = false;
    this.failedMessagebool = false;
    this.rest.getBalance(this.account).subscribe((data: {}) => {
      this.successMessage = 'Seu saldo atual é de: R$ ' + data;
      this.successMessagebool = true;
    }, error  => {
      console.log(error);
      this.failedMessage = 'A conta que você inseriu não existe. Por favor, insira uma conta válida.';
      this.failedMessagebool = true;
    });
  }
}

