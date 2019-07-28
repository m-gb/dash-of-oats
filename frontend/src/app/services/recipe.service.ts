import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IRecipe {
  name: string,
  category: string,
  servings: string,
  prep: string,
  cooking: string,
  description: string,
  ingredients: string[],
  instructions: string[],
  image: string,
  image_thumbnail: string,
  credit: string,
  created_at: string
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private uri: string = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  public getRecipes() {
    return this.http.get(`${this.uri}/recipes`);
  }

  public getRecipe(name: string) {
    return this.http.get(`${this.uri}/recipes/${name}`);
  }

  public getCategories() {
    return this.http.get(`${this.uri}/categories`);
  }

  public getCategory(category: string) {
    return this.http.get(`${this.uri}/categories/${category}`);
  }

  // Modifies a given recipe name to be capitalized and spaced.
  public editName(name: string): string {
    if (name) {
      const splitWords: string[] = name.split('_');
      const uppercaseWords: string[] = splitWords.map(n => n.charAt(0).toUpperCase() + n.slice(1));
      return uppercaseWords.join(' ');
    }
    else {
      return '';
    }
  }
}
