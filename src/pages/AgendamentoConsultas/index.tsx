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

interface Medico {
  crm: String,
  nome: String,
  cpf: String,
  area_atuacao: String
}

interface Consulta {
  id: Number,
  numero_consulta: String,
  data_hora: Date,
  tipo_consulta: String,
  cliente_cpf: String,
  medico_crm: String,
  clinica_cnpj: String,
  especialidade:String
}

const AgendamentoConsultas: React.FC = () => {

  const [cliente,setCliente] = useState();
  const [medico, setMedicos] = useState<Medico[]>([]);
  const [consulta, setConsulta] = useState<Consulta[]>([]);
  const [clinica,setClinica] = useState();

  useEffect(() => {

    api.get('/consulta/').then((response) => {
      const consultaResponse = response.data;
      console.log(consultaResponse)
      setConsulta(consultaResponse);

    });

    api.get('/clinica/').then((response) => {
      const clinicaResponse = response.data;
      console.log(clinicaResponse)
      setClinica(clinicaResponse);
    });

    api.get('/medico/').then((response) => {
      const medicoResponse = response.data;
      console.log(medicoResponse)
      setMedicos(medicoResponse);
    });

    api.get('/cliente/').then((response) => {
      const clienteResponse = response.data;
      console.log(clienteResponse)
      setConsulta(clienteResponse);
    });
  }, []);

  async function handlerAgendarConsulta() {
    const dataHora = (document.getElementById("dataConsulta") as HTMLInputElement).value
    const modalidade = () => {
      const first = (document.getElementById("f-option") as HTMLInputElement);
      const second = (document.getElementById("s-option") as HTMLInputElement);
      const third = (document.getElementById("t-option") as HTMLInputElement);

      if ( first.checked ){
        return "teleconsulta";
      } else  if ( second.checked ){
        return "à domicílio";
      } else  if ( third.checked ){
        return "presencial";
      }
    }

    const clinicaNome = () => {
      const e = (document.getElementById("selectClinica") as HTMLSelectElement);
      const clinicaStr = e.options[e.selectedIndex].text

      return clinicaStr;
    }

    const clinicaCnpj = () => {
      const cnpjStr = clinica.map (clinica => {
        if (clinicaNome() === clinica.nome_fantasia){
          //console.log(clinica);
          return clinica.cnpj;
        } else console.log('não achou o cnpj');
      })
      const e = cnpjStr.filter((el) => {
        return el != null;
      });
      return e[0];
    }


    const medicoNome = () => {
      const e = (document.getElementById("selectMedico") as HTMLSelectElement);
      const medicoStr = e.options[e.selectedIndex].text
      //console.log(medicoStr)
      return medicoStr;
    }

    const medicoCrm = () => {
      const crmStr = medico.map (medico => {
        if (medicoNome() === medico.nome){
          //console.log(medico)
          return medico.crm;
        } else console.log('não achou');
      })
      const e = crmStr.filter((el) => {
        return el != null;
      });
      return e[0];
    }

    console.log(dataHora, modalidade(), clinicaNome(), clinicaCnpj(), medicoNome(), medicoCrm());

    const newConsulta = await api.post('/consulta/', {
      numero_consulta: "123",
      data_hora: dataHora,
      tipo_consulta: {modalidade},
      cliente_cpf: "123123",
      medico_crm: {medicoCrm} ,
      clinica_cnpj: {clinicaCnpj}
    })
    .then((response) => {
      console.log(response);
    });
  };

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
                <input type="radio" id="f-option" name="selector"/>
                <label htmlFor="f-option">Teleconsulta</label>

                <div className="check" id="teleconsulta"></div>
              </li>
              <li>
                <input type="radio" id="s-option" name="selector"/>
                <label htmlFor="s-option">Domiciliar</label>
                <div className="check" id="domicilio"><div className="inside"></div></div>
              </li>
              <li>
                <input type="radio" id="t-option" name="selector"/>
                <label htmlFor="t-option">Na clínica</label>

                <div className="check" id="presencial"><div className="inside"></div></div>
              </li>
            </ul>
          </div>


          <form>

            <h1 className="selecioneClinica">Selecione a clínica</h1>
            <div className="div-select">
              <select id="selectClinica">
                <option value="0">Selecione...</option>
                {clinica &&
                clinica.map (clinica =>
                  (
                    <option>{clinica.nome_fantasia}</option>
                  )
                )
                }
              </select>
            </div>


            <h1 className="selecioneMedico">Selecione o médico </h1>
            <div className="div-select">
              <select id="selectMedico">
              <option value="0">Selecione...</option>
                {medico &&
                medico.map (medico =>
                  (
                    <option>{medico.nome}</option>
                  )
                )
                }
              </select>
            </div>

            <h1 className="selecioneData" title="caso a data esteja indidponivel a clinica ira recomendar uma data disponivel">
              Selecione uma data
            </h1>
            <input type="datetime-local" id="dataConsulta" name="dataConsulta"/>
          </form>
          <div className="button-container">
            <button className="agendarButton" onClick={() => {handlerAgendarConsulta()}}>Agendar</button>
            <button className="cancelarButton">Cancelar</button>
          </div>
        </AnimationContainer>
      </Content>
    </Container>

  );
}

export default AgendamentoConsultas;
