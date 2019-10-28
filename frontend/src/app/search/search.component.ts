import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';
import fallbackRecipes from '../../assets/recipes.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  clickedOutside: boolean = true;
  recipes: IRecipe[];
  searchText: string;

  constructor(private rs: RecipeService) { }

  ngOnInit() {
    this.rs.getRecipes().subscribe((data: IRecipe[]) => {
      this.recipes = data;
    }, (err: Error) => {
      this.recipes = fallbackRecipes;
    });
  }

  updateName(name: string): string {
    return this.rs.editName(name);
  }

  onClickedInside() {
    this.clickedOutside = true;
  }

  onClickedOutside() {
    this.clickedOutside = false;
  }
}
