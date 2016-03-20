import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Dish = new Schema();

Dish.add({
  description: { type: String },
  image: { type: String },
  name: { type: String, required: true },
  price: { type: Number, min: 0.0 }
});

export default mongoose.model('Dish', Dish);
