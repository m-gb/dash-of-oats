import { Component, OnInit, Input } from '@angular/core';
import { IRecipe, RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import fallbackRecipes from '../../assets/recipes.json';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() category: string;
  recipes: IRecipe[];

  constructor(private rs: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rs.getCategory(params.get('category')).subscribe((data: IRecipe[]) => {
        if (data.length !== 0) {
          this.category = params.get('category');
          this.recipes = data;
        }
        else {
          this.rs.getRecipes().subscribe((data: IRecipe[]) => {
            this.recipes = data.slice(1, -1);
          });
        }
      }, (err: Error) => {
        if (params.get('category')) {
          this.category = params.get('category');
          this.recipes = addDates(fallbackRecipes).filter(r => r.category === params.get('category'));
        }
        else {
          this.recipes = addDates(fallbackRecipes).slice(1, -1);
        }
      });
    });
  }
}

export function addDates(recipes: IRecipe[]) {
  return recipes.map((r, idx) => {
    const today = new Date();
    const modifiedDate = new Date().setDate(today.getDate() - idx);
    r.created_at = `${modifiedDate.toString()}`;
    return r;
  });
}
