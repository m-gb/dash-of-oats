import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'
import * as mongoose from 'mongoose'
import * as routes from './config/routes'
import errorMiddleware from './middlewares/error'

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
    this.app.use(morgan('dev'))
    this.app.use(errorMiddleware)
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  private db(): void {
    const uri: string = "mongodb://localhost:27017/recipes"
    mongoose.connect(uri, { useNewUrlParser: true }).then(
      () => { },
      err => { console.log(err.message) }
    )
  }

  private routes(): void {
    this.app.use('/', routes.router)
  }
}

export default new App().app
