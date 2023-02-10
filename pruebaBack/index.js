const app = require('./app')
const pool = require('./config/dbConfig')

app.listen(3000, () => {
    console.log('This is working');
})