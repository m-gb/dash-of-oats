import app from './app'

app.listen(app.get('port'), () => {
  console.log(`Express is now listening on port ${app.get('port')}.`)
  console.log(`Press (Ctrl-C) to exit this process.\n`)
})
