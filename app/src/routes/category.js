import express from 'express';
import Category from '../models/category';

const router = express.Router();

router.route('/').get((req, res) => {
  Category.find({}, (err, docs) => {
    console.log(docs);
    res.status(200);
    res.send(docs);
  });
});

router.route('/').post((req, res) => {
  const category = new Category(req.body);
  category.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(category);
    }
  });
});

export default router;
