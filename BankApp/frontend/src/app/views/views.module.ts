import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule,  } from 'angular-calendar';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BalanceComponent } from './balance/get-balance.component';
import { DepositComponent } from './deposit/make-deposit.component';
import { WithdrawComponent } from './withdraw/do-withdraw.component';


import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';

// @ts-ignore
import {DataTableModule} from 'angular-6-datatable';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    DataTableModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule.forRoot(),
    NgbModule
  ],
  declarations: [
    FooterComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawComponent,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component
  ],
  exports: [
    FooterComponent,
    BalanceComponent,
    DepositComponent,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
