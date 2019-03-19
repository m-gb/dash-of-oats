import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../../api/src/interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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
}
