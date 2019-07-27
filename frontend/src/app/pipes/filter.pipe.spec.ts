import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { RecipeService } from '../services/recipe.service';
import { IRecipe } from '../services/recipe.service';

describe('FilterPipe', () => {
  let rs: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ RecipeService ]
    });
    rs = TestBed.get(RecipeService);
  });

  it('should create an instance', () => {
    const pipe = new FilterPipe(rs);
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should filter recipes based on search text', () => {
      const recipes: IRecipe[] = [
        {
          "name": "banana_pancakes",
          "category": "breakfasts",
          "servings": "1",
          "prep": "10 min",
          "cooking": "10 min",
          "description": "description 1",
          "ingredients": [
            "Ingredient 1",
            "Ingredient 2"
          ],
          "instructions": [
            "Instruction 1",
            "Instruction 2"
          ],
          "image": "assets/images/banana_pancakes.jpg",
          "image_thumbnail": "assets/images/banana_pancakes_thumbnail.jpg",
          "credit": "https://dashofoats.xyz"
        },
        {
          "name": "chocolate_babka",
          "category": "desserts",
          "servings": "1",
          "prep": "10 min",
          "cooking": "10 min",
          "description": "description 2",
          "ingredients": [
            "Ingredient 1",
            "Ingredient 2"
          ],
          "instructions": [
            "Instruction 1",
            "Instruction 2"
          ],
          "image": "assets/images/chocolate_babka.jpg",
          "image_thumbnail": "assets/images/chocolate_babka_thumbnail.jpg",
          "credit": "https://dashofoats.xyz"
        }
      ];
      const expectedResult: IRecipe[] = [
        {
          "name": "banana_pancakes",
          "category": "breakfasts",
          "servings": "1",
          "prep": "10 min",
          "cooking": "10 min",
          "description": "description 1",
          "ingredients": [
            "Ingredient 1",
            "Ingredient 2"
          ],
          "instructions": [
            "Instruction 1",
            "Instruction 2"
          ],
          "image": "assets/images/recipe1.jpg",
          "image_thumbnail": "assets/images/banana_pancakes_thumbnail.jpg",
          "credit": "https://dashofoats.xyz"
        }
      ];
      const searchText: string = 'banana';
      const pipe = new FilterPipe(rs);
      const actualResult = pipe.transform(recipes, searchText);
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
