import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];
  subscription!: Subscription;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.products = this.productService.fetchProductsByCategoryId(this.route.snapshot.queryParams['categoryId']);
    this.subscription = this.productService.productsChange.subscribe(
      (products: Product[]) => {this.products=products;}
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
