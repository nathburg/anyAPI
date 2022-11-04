const { Router } = require('express');
const MarkleMovie = require('../models/MarkleMovie');

module.exports = Router()
  .get('/', async (req, res) => {
    const movies = await MarkleMovie.getAll();
    const filtered = movies.map(({ id, title }) => ({ id, title }));
    res.json(filtered);
  });
