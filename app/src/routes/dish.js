import express from 'express';
import Dish from '../models/dish';

const router = express.Router();

router.route('/').get((req, res) => {
  Dish.find({}, (err, docs) => {
    res.status(200);
    res.send(docs);
  });
});

router.route('/').post((req, res) => {
  const dish = new Dish(req.body);
  dish.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(dish);
    }
  });
});

router.route('/:id').get((req, res) => {
  Dish.findById(req.params.id, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(docs);
  });
});

export default router;
