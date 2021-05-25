import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  subscription!: Subscription;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.categories = this.categoryService.fetchCategories();
    this.subscription = this.categoryService.categoriesChange.subscribe(
      (products: Category[]) => {this.categories=products;}
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
