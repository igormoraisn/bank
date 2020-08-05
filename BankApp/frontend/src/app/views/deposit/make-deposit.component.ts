import {
  Component,
  OnInit
} from '@angular/core';
import { RestService } from '../../rest.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-make-deposit',
  templateUrl: './make-deposit.component.html',
  styleUrls: ['./make-deposit.component.scss']
})
export class DepositComponent implements OnInit {
  arr: any = [];
  account: string;
  successMessagebool: boolean;
  successMessage: string;
  value: string;
  failedMessagebool: boolean;
  failedMessage: string;
  code: number;
  constructor(public rest: RestService) {}

  ngOnInit() {
    this.clearData();
  }

  clearData() {
    this.account = '';
    this.value = '';
    this.successMessagebool = false;
    this.failedMessagebool = false;
  }

  isFormValid() {
    return this.account !== '' && this.value !== ''; 
  }

  onSubmit(form: NgForm) {
    this.successMessagebool = false;
    this.failedMessagebool = false;
    this.arr = form.value;
    this.rest.makeDeposit(this.arr).subscribe((data: {}) => {
      this.successMessage = 'Operação realizada com sucesso! Saldo atual: R$ ' + data;
      this.successMessagebool = true;
    }, error  => {
      this.code = error.error;
      if(this.code == -1) {
          this.failedMessage = 'Você inseriu um valor negativo. Por favor, forneça um valor maior que 0.';
      } else if(this.code == -3) {
          this.failedMessage = 'A conta que você inseriu não existe. Por favor, insira uma conta válida.';
      } else {
        this.failedMessage = 'Houve um erro de comunicação com o banco de dados. Por favor, tente novamente em instantes.';
      }
      this.failedMessagebool = true;
    });
  }
}

