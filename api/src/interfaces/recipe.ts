export interface IRecipe {
  name: string,
  category: string,
  servings: number,
  prep: string,
  cooking: string,
  ingredients: string[],
  instructions: string[],
  image: string
}
