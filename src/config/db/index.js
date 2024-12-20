const mongoose = require('mongoose');

async function connect() {
    try {
        // await phải nằm trong func async
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
