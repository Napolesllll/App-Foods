const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { Recipe, Diet } = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* router.get('/', (req, res) => {
    
}) */

module.exports = router;
