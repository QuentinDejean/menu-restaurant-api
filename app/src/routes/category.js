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

export default router;
