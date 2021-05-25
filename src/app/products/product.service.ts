import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product.model';
import {HttpClient} from '@angular/common/http'
import { Category } from '../categories/category.model';

@Injectable()

export class ProductService {
  productsChange = new Subject<Product[]>();

  private products: Product[] = [];

  constructor(private http: HttpClient,){}

  getProducts(){
      // returns a copy
      return this.products.slice();
  }

  getProduct(id: number){
    return this.products[id];
  }

  setProducts(products: Product[]){
    this.products = products;
  }

  fetchProductsByCategoryId(categoryId: string){
    this.http.get<Category>("http://localhost:8080/categories/"+categoryId)
      .subscribe(
        (category)=>{
          this.setProducts(category.products);
          this.productsChange.next(category.products);
        }
      )
    return this.products;
  }

}