import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Category } from './category.model';

@Injectable()

export class CategoryService {
  categoriesChange = new Subject<Category[]>();

  private categories: Category[] = [];

  constructor(private http: HttpClient,){}

  getCategories(){
      // returns a copy
      return this.categories.slice();
  }

  getCategory(id: number){
    return this.categories[id];
  }

  setCategories(categories: Category[]){
    this.categories = categories;
  }

  fetchCategories(){
    this.http.get<Category[]>("http://localhost:8080/categories")
      .subscribe(
        (categories)=>{
          this.setCategories(categories);
          this.categoriesChange.next(categories);
        }
      )
    return this.categories;
  }

}