import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from '../../../api/src/interfaces/recipe';
import { RecipeService } from '../services/recipe.service'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private rs: RecipeService) { }

  // filters all recipes based on search input
  transform(recipes: IRecipe[], searchText: string): IRecipe[] {

    if (!recipes) {
      return [];
    }
    else if (!searchText) {
      return [];
    }
    else {
      return recipes.filter((r: IRecipe) => {
        let input = searchText.toLocaleLowerCase();
        let recipe = this.rs.editName(r.name).toLocaleLowerCase()
        return recipe.includes(input);
      });
    }
  }

}
