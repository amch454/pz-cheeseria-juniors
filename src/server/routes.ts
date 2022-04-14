import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const fs = require('fs');

const router = express.Router();

// Store all purchases in the backend
var purchases: any = [];

// Recent purchases (just the last items that were purchased)
var recentPurchases: any = [];

router.get('/api/cheeses', (req, res, next) => {
  res.json(cheeses);
});

router.get('/api/purchase', (req, res, next) => {
  res.json(recentPurchases);
});

router.post('/api/purchase', (req, res, next) => {
  try {
    const newPurchases = req.body;
    recentPurchases = newPurchases;
    for (var newPurchase of newPurchases) {
      var foundIdx = -1;
      var i = 0;
      for (var purchase of purchases) {
        if (newPurchase.id == purchase.id) {
          foundIdx = i;
          break;
        }
        i++;
      }
      if (foundIdx != -1) {
        purchases[foundIdx].amount += newPurchase.amount;
      } else {
        purchases.push(newPurchase);
      }
    }
    res.json({status: 'true', msg: 'Saved purchases successfully'});
  } catch(err) {
    res.json({status: 'false', msg: 'An error occurred: ' + err});
  }
});

export default router;