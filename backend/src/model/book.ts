import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    published_date: {type: Date, default: Date.now}
});

const Book = mongoose.model("book", bookSchema);
export default Book;
