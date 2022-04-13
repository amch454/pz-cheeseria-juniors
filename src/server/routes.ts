import * as express from 'express';
const cheeses = require('./data/cheeses.json');
const fs = require('fs');
const purchase_path = './data/purchase.json';
fs.access(purchase_path, (err: any) => {
  if (!err) {
    fs.unlink(purchase_path, (err: any) => { if (err) throw err });
  }
});

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {
  res.json(cheeses);
});

router.get('/api/purchase', (req, res, next) => {
  fs.access(purchase_path, (err: any) => {
    if (err) {
      res.json([]);
    } else {
      res.json(require(purchase_path));
    }
  });
});

router.post('/api/purchase', (req, res, next) => {
  const data = JSON.stringify(req.body);
  fs.writeFile(purchase_path, data, (err: any) => { 
    if (err) {
      res.json({success: false, msg: err});
    } else {
      res.json({success: true, msg: 'Saved purchases successfully'});
    }
  });
});

export default router;