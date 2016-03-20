import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Category = new Schema();

Category.add({
  name: { type: String, required: true },
  subCategories: [Category],
  dishes: { type: Array, ref: 'Dish' }
});

export default mongoose.model('Category', Category);
