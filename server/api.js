const express = require('express');
const router = express.Router();

const thoughts = [
  {ref: 1,author: 'Murzik',title: 'Title 1',content: 'Content 1'},
  {ref: 2,author: 'Keffir',title: 'Title 2',content: 'Content 2'},
  {ref: 3,author: 'Bunitelsan',title: 'Title 3',content: 'Content 3'},
  {ref: 4,author: 'Uksus',title: 'Title 4',content: 'Content 4'},
  {ref: 5,author: '4u4varka',title: 'Title 5',content: 'Content 5'},
  {ref: 6,author: 'Kusalep',title: 'Title 6',content: 'Content 6'},
]

const AVERAGE_DELAY = 500;
const HIGH_DALAY = 3000;
const CATASTROPHE_DELAY = 15000;

router.get('/auth', (req, res) => {
  res.json({status: 'ok'});
})

router.get('/thoughts', (req, res) => {
  setTimeout(() => {
    res.json(thoughts);
    // res.json({data: {pages: []}});
    // res.sendStatus(500);
  }, AVERAGE_DELAY)
})

module.exports = router;
