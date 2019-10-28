import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import fallbackRecipes from '../../assets/recipes.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  categories: string[];

  constructor(private rs: RecipeService) { }

  ngOnInit() {
    this.rs.getCategories().subscribe((data: string[]) => {
      this.categories = data.sort();
    }, (err: Error) => {
      const localCategories = fallbackRecipes.map(r => r.category);
      const localDistinctCategories = localCategories.filter((v, i, a) => a.indexOf(v) === i);
      this.categories = localDistinctCategories.sort();
    });
  }
}
