import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const fs = require('fs');

const router = express.Router();

var purchases: any = [];

router.get('/api/cheeses', (req, res, next) => {
  res.json(cheeses);
});

router.get('/api/purchase', (req, res, next) => {
  res.json(purchases);
});

router.post('/api/purchase', (req, res, next) => {
  const new_purchases = req.body;
  for (var new_purchase of new_purchases) {
    var found_idx = -1;
    var i = 0;
    for (var purchase of purchases) {
      if (new_purchase.id == purchase.id) {
        found_idx = i;
        break;
      }
      i++;
    }
    if (found_idx != -1) {
      purchases[found_idx].amount += new_purchase.amount;
    } else {
      purchases.push(new_purchase);
    }
  }
  res.json({success: true, msg: 'Saved purchases successfully'});
});

export default router;