import { BasketService } from './../../../basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { IBasketTotal } from '../../models/basket';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {

  basketTotal$: Observable<IBasketTotal>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}
