import Header from "../components/Header"
import Footer from "../components/Footer"

import Head from "next/head"

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Jumbotron, Container } from 'reactstrap'
library.add(fas)

function Home({ data }) {
 
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
          color: #00a1fc;
          margin-bottom: 0rem !important; 

        }
        `}
        </style>

        <Container className="text-center">
          <h1 className="display-4">{data.contato.topTitulo}</h1>
          <p className="lead"> {data.contato.topSubtitulo} </p>
          <p className="lead">
            <a href={data.contato.topLinkBtn} className="btn btn-outline-primary btn-lg mt-4">{data.contato.topTextoBtn}</a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron className="fluid" className="servicos  ">
        <style>
          {`.servicos {
            background-color: #fff; 
            margin-bottom: 0rem !important; 
          }
          .circulo {
            width: 140px;
            height: 140px;
            background-color: #0a197d;
            font-size: 52px;
            color: white;
            padding-top: 25px;
          }
          .centralizar{
            margin: 0 auto !important;
            float: none !importante;
          }
          `}
        </style>

        <Container className="text-center">
          <div>
            <h2 className="display-4">{data.contato.serTitulo}</h2>
            <p className="lead pb-4">{data.contato.serSubtitulo}</p>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar" >
                <FontAwesomeIcon icon="laptop-code" />
              </div>
              <h2 className="mt-4 mb-4">{data.contato.serUmTitulo}</h2>
              <p>{data.contato.serUmDesc}</p>
            </div>

            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar" >
                <FontAwesomeIcon icon="mobile-alt" />
              </div>
              <h2 className="mt-4 mb-4">{data.contato.serDoisTitulo}</h2>
              <p>{data.contato.serDoisDesc}</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar" >
                <FontAwesomeIcon icon="network-wired" />
              </div>
              <h2 className="mt-4 mb-4">{data.contato.serTrezTitulo}</h2>
              <p>{data.contato.serTrezDesc}</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Footer />
    </div>

  )
};


export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3333/`);

  const data = await response.json();



  return { props: { data } };

}

export default Home
