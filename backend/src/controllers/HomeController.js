require('../database/connection');
require('../database/models/contato');

const mongoose = require('mongoose');
const Contato = mongoose.model("Contato");

module.exports = {

    async index (req, res)  {
            await Contato.findOne().then((contato) => {
                return res.json({
                    message: "Aqui esta seu registro",
                    contato
                });
            }).catch(() => {
                return res.status(400).json({
                    message: "Algo deu errado Nenhum registro foi encontrado"
                })
            })
        
    },

    async create(req, res) {

        const dados = {
            "topTitulo": "Temos varias opções para você",
            "topSubtitulo": "Venha Conhecer a nossa empresa",
            "topTextoBtn": "Orçamento",

            "topLinkBtn": "http://localhost:3000/orcamento",

            "serTitulo": "Serviços",
            "serSubtitulo": "Serviços temos varios",
            "serUmIcone": "laptop-code",
            "serUmTitulo": "Servico um",
            "serUmDesc": "O serviço um é top",

            "serDoisIcone": "mobile-alt",
            "serDoisTitulo": "Servico dois",
            "serDoisDesc": "O serviço dois é top",

            " serTrezIcone": "network-wired",
            "serTrezTitulo": "Servico trez",
            "serTrezDesc": "O serviço tez é top"
        }

        //NAO DEIXAR HAVER MAIS DE UM REGISTRO!
        const ContatoExistente = await Contato.findOne();
        if (ContatoExistente) {
            return res.status(400).json({
                Menssagem: "Não foi possivel cadastrar este contato, ELE JA EXISTE!"
            });
        }
        //CADASTRANDO REGISTRO!
        await Contato.create(dados, (erro) => {
            if (erro) {
                return res.status(400).json({
                    Menssagem: "Não foi possivel cadastrar os dados!"
                });
            }else{
                return res.json({
                    Menssagem: "Registro cadastrado com sucesso"
                }); 
            }
        });
    }
}
