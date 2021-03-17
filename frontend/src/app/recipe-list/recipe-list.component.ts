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
      // fetches recipes from db, else uses json from assets
      this.rs.getCategory(params.get('category')).subscribe((data: IRecipe[]) => {
        // fetches all recipes belonging to the category from params
        if (data.length !== 0) {
          this.category = params.get('category');
          this.recipes = data;
        }
        // fetches all recipes except the latest one
        else {
          this.rs.getRecipes().subscribe((data: IRecipe[]) => {
            this.recipes = data.slice(1, data.length);
          });
        }
      }, (err: Error) => {
        if (params.get('category')) {
          this.category = params.get('category');
          this.recipes = addDates(fallbackRecipes).filter(r => r.category === params.get('category'));
        }
        // fetches all recipes except the latest one
        else {
          this.recipes = addDates(fallbackRecipes).slice(1, fallbackRecipes.length);
        }
      });
    });
  }
}

export function addDates(recipes: IRecipe[]) {
  return recipes.map((r, idx) => {
    const today = new Date();
    today.setDate(new Date().getDate() - 7);
    const modifiedDate = new Date().setDate(today.getDate() - idx);
    r.created_at = `${modifiedDate.toString()}`;
    return r;
  });
}
