import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: IRecipe[];

  constructor(private titleService: Title, private rs: RecipeService) { }

  ngOnInit() {
    this.titleService.setTitle('Dash of Oats');
    this.rs.getRecipes().subscribe((data: IRecipe[]) => {
      this.recipes = data;
    });
  }

  updateName(name: string): string {
    return this.rs.editName(name);
  }
}
