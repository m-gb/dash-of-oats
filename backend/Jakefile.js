var fs = require('fs')
var mongoose = require('mongoose')
var path = require('path')

const uri = "mongodb://localhost:27017/recipes"

desc('This is a Jake task to populate the recipes collection.')
task('populate', [], () => {
  const json = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'recipes.json'), 'utf-8'))

  mongoose.connect(uri, { useNewUrlParser: true }).then(
    () => {
      console.log("Connected to the database.")
      mongoose.connection.db.collection('recipes').insertMany(json, (err) => {
        if (err) {
          console.log(err.message)
        }
        else {
          console.log("The recipes collection has been populated.")
        }
      },
        (err) => { console.log(err.message) }
      )
    }
  ).then(
    () => {
      today = new Date()
      counter = 1
      mongoose.connection.db.collection('recipes').find().forEach(
        (recipe) => {
          modifiedDate = new Date().setDate(today.getDate() - (counter++))
          mongoose.connection.db.collection('recipes').updateOne(
            { "name": recipe.name },
            {
              $set: { "created_at": modifiedDate.toString() }
            }
          )
        },
        () => {
          console.log("The recipes collection has been updated with dates.")
          mongoose.connection.close()
        }
      )
    }
  )
})

desc('This is a Jake task to drop the recipes collection.')
task('drop', [], () => {
  mongoose.connect(uri, { useNewUrlParser: true }).then(
    () => {
      console.log("Connected to the database.")
      mongoose.connection.db.dropCollection('recipes', (err) => {
        if (err) {
          console.log(err.message)
        }
        else {
          console.log("The recipes collection has been dropped.")
        }
      })
    },
    (err) => { console.log(err.message) }
  ).then(
    () => {
      mongoose.connection.close()
    }
  )
})
