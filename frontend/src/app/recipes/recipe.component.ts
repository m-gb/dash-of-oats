import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';
import fallbackRecipes from '../../assets/recipes.json';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: IRecipe;
  initialServings: string;
  servingsInput: number;

  constructor(public rs: RecipeService, private titleService: Title,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rs.getRecipe(params.get('name')).subscribe((data: IRecipe) => {
        if (data) {
          this.recipe = data;
          this.initialServings = data.servings;
          this.titleService.setTitle(`Dash of Oats - ${this.rs.editName(this.recipe.name)}`);
        }
        else {
          this.router.navigate(['/not-found']);
        }
      }, (err: Error) => {
        const localRecipe = fallbackRecipes.filter(r => r.name === params.get('name'));
        if (localRecipe) {
          this.recipe = localRecipe[0];
          this.initialServings = localRecipe[0].servings;
          this.titleService.setTitle(`Dash of Oats - ${this.rs.editName(this.recipe.name)}`);
        }
        else {
          this.router.navigate(['/not-found']);
        }
      });
    });
  }
}
