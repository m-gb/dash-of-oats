import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IRecipe } from '../../../api/src/interfaces/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: string;
  recipes: IRecipe[];

  constructor(private titleService: Title, private rs: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rs.getCategory(params.get('category')).subscribe((data: IRecipe[]) => {
        this.category = params.get('category');
        this.recipes = data;
        this.titleService.setTitle('Dash of Oats - ' + this.updateName(this.category));
      });
    });
  }

  updateName(name: string): string {
    return this.rs.editName(name);
  }
}
