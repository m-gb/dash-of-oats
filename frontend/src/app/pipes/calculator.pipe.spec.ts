import { CalculatorPipe } from './calculator.pipe';

describe('CalculatorPipe', () => {
  it('should create an instance', () => {
    const pipe = new CalculatorPipe();
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should multiply ingredients by servings', () => {
      const ingredients: string[] = [
        "3/4 cups unsweetened almond milk",
        "2 cups rolled oats",
      ];
      const servings: number = 2;
      const initialServings: number = 1;
      const expectedResult: string[] = [
        "1 1/2 cups unsweetened almond milk",
        "4 cups rolled oats"
      ];
      const pipe = new CalculatorPipe();
      const actualResult = pipe.transform(ingredients, servings, initialServings);
      expect(actualResult).toEqual(expectedResult);
    });
  });
});
