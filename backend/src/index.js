const express = require('express');
const router = require('./routes')
const app = express();
const port = 3333;
const cors = require('cors');

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type,Accept,Authortization");  
    res.header('Acces-Control-Allow-Methods', "GET, POST, PUT, DELETE" );
    app.use(cors());
    next();

});

app.use(router);


app.use(express.json());


app.listen(port, () => {
    console.log(`Servidor esta no endereço http://localhost:${port}`);
})