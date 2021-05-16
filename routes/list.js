const express = require('express');

const router = express.Router();

const Url = require('../models/url');

router.get('/', async (req, res) => {
  console.log('asd');
  try {
    const url = await Url.find({});
    if (url) {
      return res.json(url);
    } else {
      return res.status(404).json('No URL Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
