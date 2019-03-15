var fs = require('fs')
var mongoose = require('mongoose')
var path = require('path')

const uri = "mongodb://127.0.0.1:27017/recipes"

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
      })
      mongoose.connection.close()
    },
    err => { console.log(err.message) }
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
      mongoose.connection.close()
    },
    err => { console.log(err.message) }
  )
})
