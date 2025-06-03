const express = require('express');
const router = express.Router();
const Programa = require('../models/programa');

// GET todos los programas
router.get('/', async (req, res) => {
  try {
    const programas = await Programa.findAll();
    res.json(programas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener programas' });
  }
});

// POST nuevo programa
router.post('/', async (req, res) => {
  try {
    const { nombre, facultad } = req.body;
    const nuevoPrograma = await Programa.create({ nombre, facultad });
    res.status(201).json(nuevoPrograma);
  } catch (err) {
    res.status(400).json({ error: 'Error al crear programa' });
  }
});

module.exports = router;
