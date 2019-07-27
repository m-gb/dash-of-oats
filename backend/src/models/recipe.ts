import { Document, Schema, Model, model } from 'mongoose'
import { IRecipe } from '../interfaces/recipe'

export interface IRecipeModel extends IRecipe, Document { }

export var RecipeSchema: Schema = new Schema({
  name: String,
  category: String,
  servings: Number,
  prep: String,
  cooking: String,
  description: String,
  ingredients: [String],
  instructions: [String],
  image: String,
  image_thumbnail: String,
  credit: String,
  created_at: String
})

export const Recipe: Model<IRecipeModel> = model<IRecipeModel>('Recipe', RecipeSchema)
