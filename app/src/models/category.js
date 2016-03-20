import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Category = new Schema();

Category.add({
  name: { type: String, required: true },
  categories: [Category]
});

export default mongoose.model('Category', Category);
