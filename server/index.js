import app from './app.js'
import "./db.js"


app.listen(app.get('PORT'))
console.log("Server on port",app.get('PORT'))


