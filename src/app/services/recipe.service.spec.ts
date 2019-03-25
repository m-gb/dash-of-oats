import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let rs: RecipeService;
  let response;
  const allRecipes = [
    {
      "name": "Recipe 1",
      "category": "Category 1",
      "servings": "1",
      "prep": "10 min",
      "cooking": "10 min",
      "ingredients": [
        "Ingredient 1",
        "Ingredient 2"
      ],
      "instructions": [
        "Instruction 1",
        "Instruction 2"
      ],
      "image": "assets/images/recipe1.jpg"
    },
    {
      "name": "Recipe 2",
      "category": "Category 2",
      "servings": "1",
      "prep": "10 min",
      "cooking": "10 min",
      "ingredients": [
        "Ingredient 1",
        "Ingredient 2"
      ],
      "instructions": [
        "Instruction 1",
        "Instruction 2"
      ],
      "image": "assets/images/recipe2.jpg"
    }
  ];
  const oneRecipe = [
    {
      "name": "Recipe 1",
      "category": "Category 1",
      "servings": "1",
      "prep": "10 min",
      "cooking": "10 min",
      "ingredients": [
        "Ingredient 1",
        "Ingredient 2"
      ],
      "instructions": [
        "Instruction 1",
        "Instruction 2"
      ],
      "image": "assets/images/recipe1.jpg"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ RecipeService ]
    });
    rs = TestBed.get(RecipeService);
  });

  it('should be created', () => {
    expect(rs).toBeTruthy();
  });

  describe('getRecipes', () => {
    it('should return a collection of recipes', () => {
      spyOn(rs, 'getRecipes').and.returnValue(of(allRecipes)); // mock response with the provided recipes
      rs.getRecipes().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(allRecipes);
    });
  });

  describe('getRecipe', () => {
    it('should return one recipe based on its name', () => {
      const name = 'Recipe 1';
      spyOn(rs, 'getRecipe').and.returnValue(of(oneRecipe));
      rs.getRecipe(name).subscribe(res => {
        response = res;
      });
      expect(response).toEqual(oneRecipe);
    });
  });

  describe('getCategory', () => {
    it('should return one recipe based on its category', () => {
      const category = 'Category 1';
      spyOn(rs, 'getCategory').and.returnValue(of(oneRecipe));
      rs.getCategory(category).subscribe(res => {
        response = res;
      });
      expect(response).toEqual(oneRecipe);
    });
  });

  describe('editName', () => {
    it('should return a formatted string', () => {
      const name = 'banana_pancakes';
      const editedName = 'Banana Pancakes';
      expect(rs.editName(name)).toEqual(editedName);
    });
  });
});
