import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: string;
  recipes: IRecipe[];

  constructor(private titleService: Title, private rs: RecipeService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rs.getCategory(params.get('category')).subscribe((data: IRecipe[]) => {
        if (data.length != 0) {
          this.category = params.get('category');
          this.recipes = data;
          this.titleService.setTitle('Dash of Oats - ' + this.updateName(this.category));
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
