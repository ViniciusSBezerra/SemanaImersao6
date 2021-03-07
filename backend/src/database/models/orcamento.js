const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orcamento = new Schema({
    
    name:{
        type: String
    },

    email: {
        type: String
    },

    whatsapp:{
        type: String
    },

    description:{
        type: String,
    },

    
},{
    timestamp: true,

});

mongoose.model("Orcamento", orcamento)

