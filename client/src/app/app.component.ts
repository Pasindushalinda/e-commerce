import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { IPagination } from './_models/pagination';
import { IProducts } from './_models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'welcome app';
  products: IProducts[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((result: IPagination) => {
      this.products = result.data;
      console.log(this.products);
    })
  }

}
