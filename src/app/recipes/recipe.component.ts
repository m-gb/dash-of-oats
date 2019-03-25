import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IRecipe } from '../../../api/src/interfaces/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: IRecipe;
  initialServings: string;

  constructor(private titleService: Title, private rs: RecipeService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rs.getRecipe(params.get('name')).subscribe((data: IRecipe) => {
        if (data) {
          this.recipe = data;
          this.initialServings = data.servings;
          this.titleService.setTitle('Dash of Oats - ' + this.updateName(this.recipe.name));
        }
        else {
          this.router.navigate(['/not-found']);
        }
      });
    });
  }

  updateName(name: string): string {
    return this.rs.editName(name);
  }
}
