import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  appTitle: string = 'Dash of Oats'
  categories: string[];

  constructor(private rs: RecipeService) { }

  ngOnInit() {
    this.rs.getCategories().subscribe((data: string[]) => {
      this.categories = data.sort();
    });
  }

  updateName(name: string): string {
    return this.rs.editName(name);
  }
}
