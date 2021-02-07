import React, { useState, useEffect } from 'react';
import {
 FiSearch
} from 'react-icons/fi';
import { Helmet } from 'react-helmet';


import { Link, } from 'react-router-dom';


import {
  Container, Content, AnimationContainer, Background,
} from './styles';


import {
  TopNavigation
} from '../SignIn/styles';

import api from "../../services/api";
import { loadCliente, loadClinicas, loadEspecialidades, loadMedicos } from '../../services/requisicoes';
import { Medico } from '../../Interfaces/Medicos';
import { Especialidade } from '../../Interfaces/Especialidade';
import { Clinicas } from '../../Interfaces/Clinicas';
import {useHistory} from 'react-router-dom';

const AgendamentoConsultas: React.FC = () => {
  const history = useHistory();

  const [clientes, setClientes] = useState();
  const [medico, setMedicos] = useState<Medico[]>([]);
  const [clinicas, setClinicas] = useState<Clinicas[]>([]);
  const [especialidades, setEspecialidades] = useState<Especialidade[]>([]);

  const [selectTime, setSelectTime] = useState("");
  const [selectdata, setSelectData] = useState("");
  const [selectClinica, setSelectClinca] = useState("");
  const [selectMedico, setSelecMedico] = useState("");
  const [selectModalidade, setSelecModalidae] = useState("");

  useEffect(() => {
    async function loadApi() {
      const medicosList = await loadMedicos();
      const clientesList = await loadCliente();
      const clinicasList = await loadClinicas();
      const especialidadesList = await loadEspecialidades();

      setClinicas(clientesList);
      setMedicos(medicosList);
      setClientes(clientesList);
      setClinicas(clinicasList);
      setEspecialidades(especialidadesList);

    }
    loadApi();

  }, []);

  async function handlerAgendarConsulta() {
    const clienteCpf = () => {
      return localStorage.getItem('CPF');
    }

    const selectCpf = clienteCpf();
    console.log(
       "id"+Math.floor(Math.random() * 10000),
       "cpf"+selectCpf,
       "clinica"+selectClinica,
       "medico"+selectMedico,
       "modalidade"+selectModalidade,
       "data e hora"+selectTime,selectdata);

    await api.post('/consulta/', {
      "numero_consulta": Math.floor(Math.random() * 10000),
      "data": selectdata,
      "hora": selectTime,
      "tipo_consulta": selectModalidade,
      "cliente_cpf": selectCpf,
      "medico_crm": selectMedico,
      "clinica_cnpj": selectClinica
    })
      .then((response) => {
        console.log(response);
        alert("Agendamento Concluido");
        history.push('/dashboard');
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

            <div className="clinica"><Link to="/dashboard/">Voltar</Link></div>
            <div id="pesquisa"><Link to="/" onClick={() => {localStorage.clear()}}><FiSearch />Sair</Link></div>
          </div>

        </TopNavigation>
        <AnimationContainer>
          <div>{ }</div>
          <h1>Selecione a modalidade de consulta abaixo: { }</h1>
          <div id="radio-container">
            <ul id="radio-wrapper">
              <li>
                <input
                  value="ONLINE"
                  onClick={(e) => setSelecModalidae("ONLINE")}
                  type="radio" id="f-option"
                  name="selector" />
                <label htmlFor="f-option">ONLINE</label>

                <div className="check" id="ONLINE"></div>
              </li>
              <li>
                <input type="radio"
                  value="DOMICILIO"
                  onClick={(e) => setSelecModalidae("DOMICILIO")}
                  id="s-option" name="selector" />
                <label htmlFor="s-option">DOMICILIO</label>
                <div className="check" id="DOMICILIO"><div className="inside"></div></div>
              </li>
              <li>
                <input
                  value="PRESENCIAL"
                  onClick={(e) => setSelecModalidae("PRESENCIAL")}
                  type="radio" id="t-option" name="selector" />
                <label htmlFor="t-option">PRESENCIAL</label>

                <div className="check" id="PRESENCIAL"><div className="inside"></div></div>
              </li>
            </ul>
          </div>


          <form>
            <div>
              <h1 className="selecioneClinica">Selecione a clínica:</h1>
              <div className="div-select">
                <select onChange={(e) => setSelectClinca(e.target.value)} id="selectClinica">
                  <option value="0">Selecione...</option>
                  {clinicas &&
                    clinicas.map(clinica =>
                    (
                      <option value={clinica.cnpj}>{clinica.nome_fantasia}</option>
                    )
                    )
                  }
                </select>
              </div>

              <h1 className="selecioneEspecialidade">Selecione a Especialidade</h1>
              <div className="div-select">
                <select id="selectEspecialidade" >
                  <option value="0">Selecione...</option>
                  {especialidades &&
                    especialidades.map(d =>
                      {

                        return <option>{d.tipo}</option>
                      }

                    )
                  }
                </select>
              </div>

              <h1 className="selecioneMedico">Selecione o médico:</h1>
              <div className="div-select">
                <select onChange={(e) => setSelecMedico(e.target.value)} id="selectMedico">
                  <option value="0">Selecione...</option>
                  {medico &&
                    medico.map(medico =>
                    (
                      <option value={medico.crm} >{medico.nome}</option>
                    )
                    )
                  }
                </select>
              </div>

              <h1 className="selecioneData" title="Caso a data esteja indisponível a clínica ira recomendar uma data disponível">
                Selecione uma data
            </h1>
              <input
                value={selectdata} onChange={(e) => setSelectData(e.target.value)}
                type="date" id="dataConsulta" name="dataConsulta" required />

              <h1 className="selecioneData"
                title="Caso a data esteja indisponível a clínica ira recomendar um horário disponível">
                Selecione uma Hora
            </h1>
              <input
                value={selectTime} onChange={(e) => setSelectTime(e.target.value)}
                type="time" id="dataConsulta" name="dataConsulta" required />
            </div>

          </form>
          <div className="button-container">
            <button className="agendarButton" onClick={() => { handlerAgendarConsulta() }}>Agendar</button>
          </div>


        </AnimationContainer>
      </Content>
    </Container>

  );
}

export default AgendamentoConsultas;
