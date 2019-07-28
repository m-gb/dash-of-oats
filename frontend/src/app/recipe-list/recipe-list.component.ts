import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

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
            this.recipes = data;
          });
        }
      });
    });
  }
}
