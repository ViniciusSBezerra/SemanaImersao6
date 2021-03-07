const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão realizada com sucesso! ");
}).catch((err) =>{ 
    console.log("Falha ao realizar conexão! " + err);
});

module.exports = mongoose;