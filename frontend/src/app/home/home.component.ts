import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IRecipe, RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import fallbackRecipes from '../../assets/recipes.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipe: IRecipe;

  constructor(public rs: RecipeService, private titleService: Title, private router: Router) { }

  ngOnInit() {
    this.rs.getLatestRecipe().subscribe((data: IRecipe[]) => {
      if (data.length === 0) {
        this.router.navigate(['/not-found']);
      }
      else {
        this.recipe = data[0];
        this.titleService.setTitle('Dash of Oats');
      }
    }, (err: Error) => {
      if (fallbackRecipes.length === 0) {
        this.router.navigate(['/not-found']);
      }
      else {
        this.recipe = fallbackRecipes[0];
        this.titleService.setTitle('Dash of Oats');
      }
    });
  }
}
