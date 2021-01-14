import React, {useState, useEffect} from 'react';
import {
  FiArrowLeft, FiSearch
} from 'react-icons/fi';
import {Helmet} from 'react-helmet';


import {Link,} from 'react-router-dom';


import {
  Container, Content, AnimationContainer, Background, Background2
} from './styles';


import {
  TopNavigation
} from '../SignIn/styles';

import './style.css';
import Button from "../../components/Button";
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

  },[] );

  console.log(clinica.map((d:Clinica) => {
    return d.cnpj;
  } ))
  return (
    <Container>
      <Helmet>
        <title>Agendar Consultas</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial scale=1.0"/>
      </Helmet>
      <Background/>
      <Content>
        <TopNavigation>
          <div className="wrapper">

            <div className  ="clinica"><Link to="/signin/clinica">Entrar como clínica</Link></div>
            <div id="pesquisa"><Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link></div>
          </div>

        </TopNavigation>
        <AnimationContainer>
          <div>{}</div>
          <h1>Selecione a modalidade{}</h1>
          <input type="radio" id="male" name="gender" value="male"/>
          <label htmlFor="male">Teleconsulta</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label htmlFor="female">Domicilio</label>
          <input type="radio" id="other" name="gender" value="other"/>
          <label htmlFor="other">Presencial</label>


          <h1 title="caso a data esteja indidponivel a clinica ira recomendar uma data disponivel">selecione uma
            data:</h1>

          <form>

            <input type="date"/>


            <h1>Selecione a clinica {}</h1>
            <select name="" id="">
              <option value="">clinica 1</option>
              <option value="">clinica 2</option>
            </select>


            <h1>Selecione o medico </h1>
            <select name="" id="">
              {clinica && teste.map((t:Medicos)=>(
                <option value="">{t.nome}</option>
              ))}
              <option value="">medico 1</option>
              <option value="">medico 2</option>
            </select>
          </form>
          <Button type="submit">marcar consulta</Button>


        </AnimationContainer>
      </Content>
    </Container>

  );
};

export default AgendamentoConsultas;
