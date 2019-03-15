import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'
import * as routes from './config/routes'

class App {
  constructor() {
    this.app = express()
    this.config()
    this.db()
    this.routes()
  }

  public app: express.Application

  private config(): void {
    const port: number = 3000
    this.app.set('port', process.env.PORT || port)
    this.app.use(bodyParser.json())
    this.app.use(cors())
    this.app.use(morgan('dev'))
  }

  private db(): void {
    const uri: string = "mongodb://127.0.0.1:27017/recipes"
    mongoose.connect(uri, { useNewUrlParser: true }).then(
      () => { console.log("Connected to the database.\n") },
      err => { console.log(err.message) }
    )
  }

  private routes(): void {
    this.app.use('/', routes.router)
  }
}

export default new App().app
