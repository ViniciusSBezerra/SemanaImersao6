import React, { useState } from "react"
import Header from '../components/Header';
import Footer from "../components/Footer"
import Head from "next/head"
import { Container, Form, FormGroup, Input, Jumbotron, Label, Button, Alert } from "reactstrap"

function orcamento() {

    const [orcamento, setOrcamento] = useState({
        name: "",
        email: "",
        whatsapp: "",
        description: "",
    });

    const [response, setResponse] = useState({
       formSave: false,
       type: '',
       message: ''

    })

    const onChangeInput = e => setOrcamento({ ...orcamento, [e.target.name]: e.target.value });

    const send = async e => {
        e.preventDefault();

        setResponse({ formSave: true })

        try {

            const res = await fetch('http://localhost:3333/orcamento', {
                method: 'POST',
                body: JSON.stringify(orcamento),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

         

            if (responseEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: responseEnv.message
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: responseEnv.message
                });

            }
           
        } catch (err) {
            setResponse({
                formSave: false,
                type: 'success',
                message: "Orçamento enviado"
            });
        }
    }

    return (
        <div>
            <Head>
                <title>Orçamentos SI6</title>
            </Head>

            <Header />

            <Jumbotron fluid className="descr-top">

                <style>
                    {`.descr-top{

                        background-color: #050c3d;
                        color:  #00a1fc;

                        padding-top: 40px;
                        padding-bottom: 40px;

                        margin-bottom: 0rem !important;
                    }`}
                </style>

                <Container className="text-center">
                    <h1 className="display-4">Orçamento</h1>
                </Container>

            </Jumbotron>

            <Jumbotron fluid className="form-orcamento">
                <style>
                    {`.form-orcamento{
                            padding: 80px 0 80px 0;
                            background-color: #fff;
                            margin-bottom: 0rem !important;
                        }`}
                </style>

                <Container>
                    {response.type === 'success' ?   <Alert color="success">{response.message}</Alert>: ""}
                    {response.type === 'error' ?   <Alert color="danger">{response.message}</Alert>: ""}
                    

                    <Form onSubmit={send}>

                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Digite o seu nome!" onChange={onChangeInput} required ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">E-mail</Label>
                            <Input type="text" name="email" id="email" placeholder="Digite o seu E-mail!" onChange={onChangeInput} required></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="whatsapp">WhatsApp</Label>
                            <Input type="text" name="whatsapp" id="whatsapp" placeholder="(xx) xxxxx-xxxx" onChange={onChangeInput} required></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Descrição</Label>
                            <Input type="textarea" name="description" id="description" onChange={onChangeInput} required ></Input>
                        </FormGroup>

                        {response.formSave ? <Button type="Submit" outline color="danger" disabled >Enviando... </Button> : <Button type="Submit" outline color="primary" >Solicitar orçamento</Button>}
                        
                    </Form>

                </Container>


            </Jumbotron>

            <Footer />

        </div>
    )
}

export default orcamento