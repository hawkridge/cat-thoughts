const express = require('express');
const router = express.Router();

const AVERAGE_DELAY = 500;
const HIGH_DALAY = 3000;
const CATASTROPHE_DELAY = 15000;

router.get('/auth', (req, res) => {
  res.json({status: 'ok'});
})

router.post('/journal_all', (req, res) => {
  setTimeout(() => {
    res.json({status: 'ok'});
    // res.json({data: {pages: []}});
    // res.sendStatus(500);
  }, AVERAGE_DELAY)
})

module.exports = router;
