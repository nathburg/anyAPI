const { Router } = require('express');
const MarkleMovie = require('../models/MarkleMovie');

module.exports = Router()
  .get('/', async (req, res) => {
    const movies = await MarkleMovie.getAll();
    const filtered = movies.map(({ id, title }) => ({ id, title }));
    res.json(filtered);
  })
  
  .get('/:id', async (req, res) => {
    const movie = await MarkleMovie.getById(req.params.id);
    res.json(movie);
  });
