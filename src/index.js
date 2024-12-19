const { engine } = require('express-handlebars'); 
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

// Cấu hình đường dãn file tĩnh
app.use(express.static(path.join(__dirname, 'public')))

// HTTP Logger
app.use(morgan('combined'))

//
app.engine('hbs', engine({
    extname: '.hbs' // đổi đuôi các file .handlebars thành .hdb
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    // render ra trang home
  return res.render('home')
})

app.get('/news', (req, res) => {
  return res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})