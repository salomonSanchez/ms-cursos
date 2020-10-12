const mongoose = require('mongoose')
const uri = "mongodb+srv://ms:microservicios@cluster0.lkdhv.mongodb.net/microservicios?retryWrites=true&w=majority";

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => { console.log("‘MongoDB Connected…’") })
    .catch(err => console.log(err))


const cursoModel = mongoose.model("cursos", {
    codigo: String,
    nombre: String,
    creditos: String
});

module.exports = {
    cursoModel
}