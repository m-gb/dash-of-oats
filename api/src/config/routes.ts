import * as express from 'express'
import { Recipe, IRecipeModel } from '../models/recipe'
import { HttpException } from '../exceptions/http'

export const router = express.Router()

// Returns all recipes in json format
router.route('/api/v1/recipes').get((req, res, next) => {
  Recipe.find((err: any, recipes: IRecipeModel[]) => {
    if (err) {
      next(new HttpException(500, err.message))
    }
    else {
      res.status(200).json(recipes)
    }
  })
})

// Returns a recipe based on the name in json format
router.route('/api/v1/recipes/:name').get((req, res, next) => {
  Recipe.findOne({ name: req.params.name }, (err: any, recipe: IRecipeModel) => {
    if (err) {
      next(new HttpException(500, err.message))
    }
    else {
      res.status(200).json(recipe)
    }
  })
})

// Returns an array of all categories in json format
router.route('/api/v1/categories').get((req, res, next) => {
  Recipe.find().distinct('category', (err: any, categories: string[]) => {
    if (err) {
      next(new HttpException(500, err.message))
    }
    else {
      res.status(200).json(categories)
    }
  })
})

// Returns recipes based on the category in json format
router.route('/api/v1/categories/:category').get((req, res, next) => {
  Recipe.find({ category: req.params.category }, (err: any, recipes: IRecipeModel[]) => {
    if(err) {
      next(new HttpException(500, err.message))
    }
    else {
      res.status(200).json(recipes)
    }
  })
})
