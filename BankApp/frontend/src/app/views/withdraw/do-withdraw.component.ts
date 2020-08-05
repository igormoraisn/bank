import {
  Component,
  OnInit
} from '@angular/core';
import { RestService } from '../../rest.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-do-withdraw',
  templateUrl: './do-withdraw.component.html',
  styleUrls: ['./do-withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  account: string;
  arr: any = [];
  successMessagebool: boolean;
  successMessage: string;
  failedMessagebool: boolean;
  failedMessage: string;
  code: number;
  value: string;

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
    this.rest.doWithdraw(this.arr).subscribe((data: {}) => {
      console.log(data);
      this.successMessage = 'Operação realizada com sucesso! Seu saldo atual é de: R$ ' + data;
      this.successMessagebool = true;
    }, error  => {
      this.code = error.error;
      if(this.code == -1) {
        this.failedMessage = 'Você inseriu um valor negativo. Por favor, forneça um valor maior que 0.';
      } else if(this.code == -2) {
        this.failedMessage = 'O valor solicitado excede o saldo atual. Por favor, verifique e tente novamente.';
      } else if(this.code == -3) {
        this.failedMessage = 'Houve um erro de comunicação com o banco de dados. Por favor, tente novamente em instantes.';
      } else {
        this.failedMessage = 'A conta que você inseriu não existe. Por favor, insira uma conta válida.';
      }
      this.failedMessagebool = true;
    });
  }
}

