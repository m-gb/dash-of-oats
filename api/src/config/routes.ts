import * as express from 'express'
import { Recipe, IRecipeModel } from '../models/recipe'

export const router = express.Router()

router.route('/api/v1/recipes').get((req, res) => {
  Recipe.find((err: any, recipes: IRecipeModel[]) => {
    if (err) {
      res.status(500).json({ error: err.message })
    }
    else {
      res.status(200).json(recipes)
    }
  })
})
