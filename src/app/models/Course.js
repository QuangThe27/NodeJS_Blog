const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator'); //(lỗi thư viện)
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }, // sử dụng thư viện để fix lỗi slug khi trùng name
    },
    {
        // sử dụng đối số timestamps để tự tạo thời gian
        timestamps: true,
    },
);

module.exports = mongoose.model('Course', Course);
