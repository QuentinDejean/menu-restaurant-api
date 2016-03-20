import Category from '../models/Category';

const categoryService = {
  create: (data, cb) => {
    const category = new Category(data);
    category.save((err) => {
      cb(err, category);
    });
  },

  findById: (id, cb) => {
    return Category.findById(id, cb);
  },

  list: (cb) => {
    return Category.find({}, cb);
  }
};

export default categoryService;
