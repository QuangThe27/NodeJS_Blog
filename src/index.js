const { engine } = require('express-handlebars');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

db.connect();

// Cấu hình đường dãn file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Dùng để sử lý form
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP
app.use(methodOverride('_method'));

// HTTP Logger
app.use(morgan('combined'));

//
app.engine(
    'hbs',
    engine({
        // đổi đuôi các file .handlebars thành .hdb
        extname: '.hbs',
        // Cấu hình phép cộng
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Home, search, contact (các trang như trên để vào 1 trang)
// Routes khởi tạo, truyền đến src/routes/index.js
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
