const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const contato = new Schema({
    
    topTitulo:{
        type: String
    },

    topSubtitulo: {
        type: String
    },

    topTextoBtn:{
        type: String
    },

    topLinkBtn:{
        type: String
    },

    serTitulo:{
        type: String,
    },

    serSubtitulo:{
        type: String,
    },

    serUmIcone: {
        type: String
    },

    serUmTitulo:{
        type: String
    },

    serUmDesc:{
        type: String,
    },

    serDoisIcone: {
        type: String
    },

    serDoisTitulo:{
        type: String
    },

    serDoisDesc:{
        type: String,
    },

    serTrezIcone: {
        type: String
    },

    serTrezTitulo:{
        type: String
    },

    serTrezDesc:{
        type: String,
    },


    
},{
    timestamp: true,

});

mongoose.model("Contato", contato)

module.exports = contato