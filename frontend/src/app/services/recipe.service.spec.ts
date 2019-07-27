import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { RecipeService, IRecipe } from './recipe.service';

describe('RecipeService', () => {
  let rs: RecipeService;
  let response: Object;
  const allRecipes: IRecipe[] = [
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
  const oneRecipe: IRecipe[] = [
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
      const name = 'banana_pancakes';
      spyOn(rs, 'getRecipe').and.returnValue(of(oneRecipe));
      rs.getRecipe(name).subscribe(res => {
        response = res;
      });
      expect(response).toEqual(oneRecipe);
    });
  });

  describe('getCategories', () => {
    it('should return an array of categories', () => {
      const allCategories = [ "breakfasts", "desserts", "lunches", "sauces" ];
      spyOn(rs, 'getCategories').and.returnValue(of(allCategories));
      rs.getCategories().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(allCategories);
    });
  });

  describe('getCategory', () => {
    it('should return one recipe based on its category', () => {
      const category = 'breakfasts';
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
