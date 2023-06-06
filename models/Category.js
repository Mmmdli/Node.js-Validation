const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:String,
    surname: String,
    email: String,
    password: Number,
});
const Category = mongoose.model('category', categorySchema);

module.exports = {
    Category
}
