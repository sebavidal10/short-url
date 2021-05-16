const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');

const router = express.Router();

// Models
const Url = require('../models/url');

// Url Api
const PORT = process.env.PORT || 5001;
const SERVER = process.env.SERVER || `http://localhost`;

const baseUrl = `${SERVER}:${PORT}`;

router.post('/shorten', async (req, res) => {
  // body example: {"urlOriginal": "https://www.av.com"}
  const { urlOriginal } = req.body; // destructure the urlOriginal from req.body

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base URL');
  }
  const urlCode = shortid.generate();

  if (validUrl.isUri(urlOriginal)) {
    try {
      let url = await Url.findOne({
        urlOriginal,
      });

      if (url) {
        res.json(url);
      } else {
        const urlShort = baseUrl + '/' + urlCode;

        url = new Url({
          urlOriginal,
          urlShort,
          urlCode,
        });
        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(401).json('Invalid urlOriginal');
  }
});

module.exports = router;
