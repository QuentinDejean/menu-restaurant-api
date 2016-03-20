import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Category = new Schema();

Category.add({
  name: { type: String, required: true },
  categories: [Category]
});

mongoose.model('Category', Category);
