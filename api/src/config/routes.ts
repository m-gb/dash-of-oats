import * as express from 'express'
import { Recipe, IRecipeModel } from '../models/recipe'

export const router = express.Router()

router.route('/api/v1').get((req, res) => {
  Recipe.find((err: any, recipes: IRecipeModel[]) => {
    if (err) {
      res.status(500).json({ error: err.message })
    }
    else {
      res.status(200).json(recipes)
    }
  })
})

router.route('/api/v1/:name').get((req, res) => {
  Recipe.findOne({ name: req.params.name }, (err: any, recipe: IRecipeModel) => {
    if (err) {
      res.status(500).json({ error: err.message })
    }
    else {
      res.status(200).json(recipe)
    }
  })
})

router.route('/api/v1/categories/:category').get((req, res) => {
  Recipe.find({ category: req.params.category }, (err: any, recipes: IRecipeModel[]) => {
    if(err) {
      res.status(500).json({ error: err.message })
    }
    else {
      res.status(200).json(recipes)
    }
  })
})
