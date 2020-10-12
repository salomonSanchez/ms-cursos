const modelos = require('../database/dbconf')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('welcome:  visit /consultar/cursos ')
})

router.get('/cursos/consultar', async(request, response) => {
    try {
        var result = await modelos.cursoModel.find().exec();
        response.json(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.post("/cursos/registrar/cursos", async(request, response) => {
    try {
        var curso = new modelos.cursoModel(request.body);
        var result = await curso.save();
        //response.send(result);
        response.json(result)

    } catch (error) {
        response.status(500).send(error);
    }
});

router.put("/cursos/actualizar/curso/:id", async(request, response) => {
    try {
        var curso = await modelos.cursoModel.findOneAndUpdate({ codigo: request.params.id }, { $set: request.body }).exec();
        response.json(curso)
    } catch (error) {
        response.status(500).send(error);
    }
});

router.delete("/cursos/eliminar/curso/:id", async(request, response) => {
    try {
        console.log("elminado: ")
        var result = await modelos.cursoModel.deleteOne({ codigo: request.params.id }).exec();
        response.json("curso eliminado")
    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports = router;