//set up dependencies
const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  let key = process.env.GOOGLE_MAPS_KEY || '';
  res.render('index.ejs', {key})
})

module.exports = router;
