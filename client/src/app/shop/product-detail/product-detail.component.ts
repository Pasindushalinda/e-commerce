import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProducts } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from './../shop.service';
import { BasketService } from './../../basket/basket.service';
import { IBasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProducts;
  quantity = 1;

  constructor(private shopService: ShopService,
    private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService,
    private basketService: BasketService
  ) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    })
  }

  addToBasket(item: IProducts) {
    this.basketService.addItemToBasket(item, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

}
