import * as express from 'express'
import { Recipe, IRecipeModel } from '../models/recipe'

export const router = express.Router()

router.route('/').get((req, res) => {
  Recipe.find((err: any, recipes: IRecipeModel[]) => {
    if (err) {
      console.log(err.message)
    }
    else {
      res.json(recipes)
    }
  })
})
