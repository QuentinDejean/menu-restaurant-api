import express from 'express';
import Category from '../models/category';

const router = express.Router();

router.route('/').get((req, res) => {
  Category.find({}, (err, docs) => {
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

router.route('/:id').get((req, res) => {
  Category.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(docs);
  });
});

router.route('/:id/dish').post((req, res) => {
  Category.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(docs);
  });
});

router.route('/:id/dish/:dishId').put((req, res) => {
  Category.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(docs);
  });
});

export default router;
