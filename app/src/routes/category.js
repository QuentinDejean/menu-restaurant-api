import express from 'express';
import categoryService from '../services/category';


const router = express.Router();

router.route('/').get((req, res) => {
  categoryService.list((err, docs) => {
    res.status(200);
    res.send(docs);
  });
});

router.route('/').post((req, res) => {
  categoryService.create(req.body, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

router.route('/:id').get((req, res) => {
  categoryService.findById(req.params.id, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    }

    res.status(200).send(doc);
  });
});

router.route('/:id/dish').post((req, res) => {
  // Category.findById(req.params.id, (err, docs) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //
  //   res.status(200).send(docs);
  // });
});

router.route('/:id/dish/:dishId').put((req, res) => {
  // Category.findById(req.params.id, (err, docs) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   }
  //
  //   res.status(200).send(docs);
  // });
});

export default router;
