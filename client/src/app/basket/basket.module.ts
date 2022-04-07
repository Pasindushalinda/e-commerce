import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRouterModule } from './basket-router.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRouterModule,
    SharedModule,
  ]
})
export class BasketModule { }
