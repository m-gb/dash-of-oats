import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from '../services/recipe.service';
import { RecipeService } from '../services/recipe.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category: string;
  recipes: IRecipe[];

  constructor(private rs: RecipeService, private titleService: Title, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.rs.getCategory(params.get('category')).subscribe((data: IRecipe[]) => {
        if (data.length === 0) {
          this.router.navigate(['/not-found']);
        }
        else {
          this.category = params.get('category');
          this.titleService.setTitle(`Dash of Oats - ${this.rs.editName(this.category)}`);
        }
      });
    });
  }
}
