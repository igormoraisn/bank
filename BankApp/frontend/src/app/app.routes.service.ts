
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './views/errors/not-found/not-found.component';
import { Dashboard1Component } from './views/dashboards/dashboard1/dashboard1.component';
import { BalanceComponent } from './views/balance/get-balance.component';
import { DepositComponent } from './views/deposit/make-deposit.component';
import { WithdrawComponent } from './views/withdraw/do-withdraw.component';


const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home/dashboard' },
  { path: 'home', children:
    [
      { path: 'dashboard', component: Dashboard1Component },
    ]
  },
  { path: 'balance', children:
      [
        { path: 'getBalance', component: BalanceComponent },
      ]
  },
  { path: 'withdraw', children:
  [
    { path: 'doWithdraw', component: WithdrawComponent },
  ]
},
  { path: 'deposit', children:
  [
    { path: 'makeDeposit', component: DepositComponent },
  ]
},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
