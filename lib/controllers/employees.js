const { Router } = require('express');
const Employee = require('../models/Employee');

module.exports = Router()
  .get('/', async (req, res) => {
    const employees = await Employee.getAll();
    const filtered = employees.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })
  .get('/:id', async (req, res) => {
    const employee = await Employee.getById(req.params.id);
    res.json(employee);
  });

