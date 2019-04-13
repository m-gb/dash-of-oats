import { Pipe, PipeTransform } from '@angular/core';
import Fraction from 'fraction.js';

@Pipe({
  name: 'calculator'
})
export class CalculatorPipe implements PipeTransform {

  transform(ingredients: string[], servings: number, initialServings: number): string[] {
    let updatedIngredients: string[];
    if (servings && servings != initialServings) {
      updatedIngredients = ingredients.map(ingredient => this.updateIngredient(ingredient, servings, initialServings));
    }
    else {
      updatedIngredients = ingredients;
    }
    return updatedIngredients;
  }

  // Calculates an ingredient's amount based on the number of servings entered.
  updateIngredient(ingredient: string, servings: number, initialServings: number) {
    // On page load ingredient might be null.
    let firstIngredientElement: any = `${ingredient}`.split(" ").shift();
    // Checks if the first part of the ingredient is a number.
    // parseInt("3/4") returns 3 while Number("3/4") returns NaN. 
    if (isNaN(parseInt(firstIngredientElement))) {
      return ingredient;
    }
    else {
      let ingredientAmount: Fraction = new Fraction(firstIngredientElement);
      let multiplier: Fraction = new Fraction(servings).div(initialServings);
      let multipliedIngredient: string = new Fraction(ingredientAmount).mul(multiplier).toFraction();
      multipliedIngredient = this.convertImproperFractionToMixedNumber(multipliedIngredient);
      let splitIngredient: string[] = `${ingredient}`.split(" ").slice(1);
      splitIngredient.unshift(`${multipliedIngredient}`);
      return splitIngredient.join(" ");
    }
  }

  // If an ingredient is an improper fraction, convert it to a mixed number.
  convertImproperFractionToMixedNumber(improperFraction: string): string {
    let answer: string;
    let splitFraction: string[] = improperFraction.split("/");
    let numerator: number = Number(splitFraction[0]);
    let denominator: number = Number(splitFraction[1]);
    let number: number = numerator / denominator;
    let remainder: number = numerator % denominator;

    if (Math.floor(number) > 0) {
      answer = `${Math.floor(number)} ${remainder}/${denominator}`;
    }
    else if (Math.floor(number) == 0) {
      answer = `${remainder}/${denominator}`;
    }
    else {
      answer = `${numerator}`;
    }
    return answer;
  }
}
