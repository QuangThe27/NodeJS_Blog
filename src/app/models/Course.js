const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255 },
        level: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);

Course.plugin(mongooseDelete, {
    deletedAt: true, // Thêm khoảng thời gian
    overrideMethods: 'all', // Đè dữ liệu để không hiển thị lên giao diện khi đã xóa mềm
});

module.exports = mongoose.model('Course', Course);
