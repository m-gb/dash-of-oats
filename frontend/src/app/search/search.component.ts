import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  clickedOutside: boolean = true;
  recipes: IRecipe[];

  constructor(private rs: RecipeService) { }

  ngOnInit() {
    this.rs.getRecipes().subscribe((data: IRecipe[]) => {
      this.recipes = data;
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
