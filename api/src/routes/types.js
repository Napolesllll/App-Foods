const { Router } = require('express');
const router = Router();
const { TypeDiet } = require('../db');
const { diets } = require('../controllers/diets')

router.get('/', async (req,res) => {

        diets.forEach(e => {
            TypeDiet.findOrCreate({ //devolverá una instancia (ya sea la instancia encontrada o la instancia creada) y un valor booleano que indica si esa instancia se creó o ya existía.
                where: {name:e.name}//opción se usa para definir qué se debe crear en caso de que no se encuentre nada. 
            })
        })

         const allTheTypes = await TypeDiet.findAll();
        res.send(allTheTypes.map(e => e.name))
})

module.exports= router;