import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public editName(name: string): string {
    if(name) {
      let splitWords: string[] = name.split("_");
      let uppercaseWords: string[] = splitWords.map(n => n.charAt(0).toUpperCase() + n.slice(1));
      return uppercaseWords.join(" ");
    }
    else {
      return "";
    }
  }
}
