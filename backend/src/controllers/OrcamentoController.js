require('../database/connection');
require('../database/models/orcamento')

const mongoose = require('mongoose');
const Orcamento = mongoose.model("Orcamento")

module.exports = {

    async index (req, res)  {
            await Orcamento.find().then((orcamento) => {
                return res.json({
                    message: "Seus registros",
                    orcamento
                });
            }).catch(() => {
                return res.status(400).json({
                    message: "Aqui estão os seus dados"
                })
            })
       
    },

    async create(req, res){
        await sleep(2000);
        function sleep (ms){
            return new mongoose.Promise((resolve) =>{
                setTimeout(resolve, ms);
            });
        };
    
        const {
            name,
            email,
            whatsapp,
            description,
        } = req.body
    
        const emailUnico = await Orcamento.findOne({ email })
        if (emailUnico) {
            return res.json({
                error: true,
                message: "Email já cadastrado! por favor tente outro email",
                email
            })
        }
    
        const whatsappUnico = await Orcamento.findOne({ whatsapp })
        if (whatsappUnico) {
            return res.json({
                error: true,
                message: "WhatsApp já cadastrado! por favor tente outro email",
                whatsapp
            })
        }
        await Orcamento.create({
            name,
            email,
            whatsapp,
            description,
        },
            (err) => {
                if (err) {
                    return res.status(400).json({
                        error: true,
                        message: "Menssagem não cadastrada"
                    });
                }else{
                    res.status(400).json({
                        error: false,
                        message: "Usuario cadastrado com sucesso!"
                    })
                }
    
            })
    }
}