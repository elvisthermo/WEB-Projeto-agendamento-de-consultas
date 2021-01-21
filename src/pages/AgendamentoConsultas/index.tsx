import React, { useState, useEffect } from 'react';
import {
  FiArrowLeft, FiSearch
} from 'react-icons/fi';
import { Helmet } from 'react-helmet';


import { Link, } from 'react-router-dom';


import {
  Container, Content, AnimationContainer, Background, Background2
} from './styles';


import {
  TopNavigation
} from '../SignIn/styles';

import './style.css';
import api from "../../services/api";

interface Medicos {
  crm: String,
  nome: String,
  cpf: String,
  area_atuacao: String
}

interface Clinica {
  cnpj: String,
  razao_social: String,
  nome_fantasia: String,
  endereco: String
}


const AgendamentoConsultas: React.FC = () => {

  const [medicoslist, setMedicos] = useState<Medicos[]>([]);
  let [clinica, setClinica] = useState<Clinica[]>([]);
  let teste = [];


  useEffect(() => {
    // api.get('b/5eb844ae47a2266b14762c0b/1' )
    //   .then((response) => {
    //
    //   const medicoRepository = response.data;
    //   console.log(response)
    //   setClinica(medicoRepository);
    //   teste =medicoRepository;
    //   console.log("MD",clinica)
    //   console.log("MD",teste)

    // });

    api.get('/clinica/').then((response) => {
      const cleinteRepositori = response.data;
      console.log(cleinteRepositori)
      setClinica(cleinteRepositori);
      //console.log(clinica)
    });

  }, []);

  console.log(clinica.map((d: Clinica) => {
    return d.cnpj;
  }))
  return (
    <Container>
      <Helmet>
        <title>Agendar Consultas</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial scale=1.0" />
      </Helmet>
      <Background />
      <Content>
        <TopNavigation>
          <div className="wrapper">

            <div className="clinica"><Link to="/signin/clinica">Entrar como clínica</Link></div>
            <div id="pesquisa"><Link to="/pesquisar"><FiSearch />Pesquisar Clínicas</Link></div>
          </div>

        </TopNavigation>
        <AnimationContainer>
          <div>{ }</div>
          <h1>Selecione a modalidade de consulta abaixo: { }</h1>
          <div id="radio-container">
            <ul id="radio-wrapper">
              <li>
                <input type="radio" id="f-option" name="selector" />
                <label htmlFor="f-option">Teleconsulta</label>

                <div className="check"></div>
              </li>
              <li>
                <input type="radio" id="s-option" name="selector" />
                <label htmlFor="s-option">À domicílio</label>
                <div className="check"><div className="inside"></div></div>
              </li>
              <li>
                <input type="radio" id="t-option" name="selector" />
                <label htmlFor="t-option">Presencial</label>

                <div className="check"><div className="inside"></div></div>
              </li>
            </ul>
          </div>


          <form>

            <h1 className="selecioneClinica">Selecione a clínica</h1>
            <div className="div-select">
              <select>
                <option>Selecione</option>
                <option>Primeira opção</option>
                <option>Segunda opção</option>
                <option>Terceira opção</option>
                <option>Quarta opção</option>
              </select>
            </div>


            <h1 className="selecioneMedico">Selecione o médico </h1>
            <div className="div-select">
              <select>
                <option>Selecione</option>
                <option>Primeira opção</option>
                <option>Segunda opção</option>
                <option>Terceira opção</option>
                <option>Quarta opção</option>
              </select>
            </div>

            <h1 className="selecioneData" title="caso a data esteja indidponivel a clinica ira recomendar uma data disponivel">
              Selecione uma data
            </h1>
            <input type="date" className="dataConsulta" name="dataConsulta"/>
          </form>
          <div className="button-container">
            <button className="agendarButton">Agendar</button>
            <button className="cancelarButton">Cancelar</button>
          </div>
        </AnimationContainer>
      </Content>
    </Container>

  );
};

export default AgendamentoConsultas;
