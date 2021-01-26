import React, { useEffect, useState } from 'react';

import {
  FiArrowLeft, FiSearch, FiChevronDown
} from 'react-icons/fi';

import { Helmet } from 'react-helmet';

import { Link, } from 'react-router-dom';

import ClinicasLista from '../../components/ClinicasLista'
import SearchBar from '../../components/SearchBar'

import {
  Container, Content, AnimationContainer, Background, Background2, TopNavigation
} from './styles';


import './style.css';
import api from "../../services/api";

const PesquisaDeClinicas: React.FC = () => {

  const [input, setInput] = useState('');
  const [clinicasListaDefault, setclinicasListaDefault] = useState();
  const [clinicasLista, setclinicasLista] = useState();

  const fetchData = async () => {
    await api.get('/clinica/').then((response) => {
      const clinicaResponse = response.data;
      console.log(clinicaResponse)
      setclinicasLista(clinicaResponse);
      setclinicasListaDefault(clinicaResponse);
    });
  };

  const updateInput = async (input) => {
    const filtered = clinicasListaDefault.filter(clinica => {
      return clinica.nome_fantasia.toLowerCase().includes(input.toLowerCase())
    })
    const table = (document.getElementsByClassName('table') as HTMLCollectionOf<HTMLElement>)

    if(filtered.length !== 0){
      table[0].style.display = ''
    } else {
      table[0].style.display = 'none'
    }

    if(input.length === 0 ){
      table[0].style.display = 'none'
    }

    setInput(input);
    setclinicasLista(filtered);
    console.log(filtered)
  }

  useEffect(() => { fetchData() }, []);

  return (
    <Container>
      <Helmet>
        <title>Pesquisar Clínicas</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial scale=1.0" />
      </Helmet>
      <Background />
      <Content>
        <TopNavigation>
          <div className="wrapper">
            <div id="clinica"> <Link to="/signin/clinica">Entrar como clínica</Link></div>
            <div id="pesquisa"> <Link to="/pesquisar"><FiSearch />Pesquisar Clínicas</Link> </div>
          </div>
        </TopNavigation>
        <AnimationContainer>
          <div className="especialidade-medico">
            <div className="container">
              <div className="especialidade-medico-content">
                <div className="left-sidebar"><h1 className="underlined-left">Vamos começar!</h1></div>
                <div className="right-sidebar">
                  <div className="header-wrapper">
                    <div className="header-container">
                      <h1 className="header">Pesquise o nome da clínica</h1>
                      {/* <p className="sub-header"><strong>Pesquise o nome da clínica abaixo:</strong></p> */}
                    </div>
                    <div className="options-container">
                      <div className="options-wrapper">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div id="radio-container">
              <ul id="radio-wrapper">
                <li>
                  <input type="radio" id="f-option" name="selector"/>
                  <label htmlFor="f-option">Teleconsulta</label>

                  <div className="check"></div>
                </li>
                <li>
                  <input type="radio" id="s-option" name="selector"/>
                  <label htmlFor="s-option">À domicílio</label>
                  <div className="check"><div className="inside"></div></div>
                </li>
                <li>
                  <input type="radio" id="t-option" name="selector"/>
                  <label htmlFor="t-option">Presencial</label>

                  <div className="check"><div className="inside"></div></div>
                </li>
                </ul>
            </div> */}

              {/* <div id="cover">
                <form className="form-pesquisa" method="get" action="">
                  <div className="tb">
                    <div className="td"><input className="inputo" type="text" placeholder="Procurar clínicas..." onChange={(e) => setKeyword(e.target.value)} /></div>
                    <div className="td" id="s-cover">
                      <button type="submit" >
                        <div id="s-circle"></div>
                        <span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}

              <SearchBar input={input} onChange={updateInput} />
              <table className="table" style={{display: "none"}}>
                <thead className="table-head">
                  <tr>
                    <th>Clínica<FiChevronDown /></th>
                    <th>Endereço<FiChevronDown /></th>
                    <th>CNPJ<FiChevronDown /></th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <ClinicasLista clinicasLista={clinicasLista} />
                </tbody>
              </table>

            </div>
          </div>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
      <Background2 />
    </Container>

  );
};
export default PesquisaDeClinicas;
