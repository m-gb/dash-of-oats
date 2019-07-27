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
