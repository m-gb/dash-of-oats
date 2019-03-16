import { Document, Schema, Model, model } from 'mongoose'
import { IRecipe } from '../interfaces/recipe'

export interface IRecipeModel extends IRecipe, Document { }

export var RecipeSchema: Schema = new Schema({
  name: String,
  type: String,
  description: String,
  ingredients: [String],
  image: String
})

export const Recipe: Model<IRecipeModel> = model<IRecipeModel>('Recipe', RecipeSchema)