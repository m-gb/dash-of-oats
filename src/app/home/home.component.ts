import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../../api/src/interfaces/recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: IRecipe[];

  constructor(private rs: RecipeService) { }

  ngOnInit() {
    this.rs.getRecipes().subscribe((data: IRecipe[]) => {
      this.recipes = data;
    });
  }

  editName(name: string): string {
    return this.rs.editName(name);
  }
}
