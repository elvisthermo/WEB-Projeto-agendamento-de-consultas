import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignInClinica from '../pages/SignInClinica';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import CadastroClinicas from '../pages/CadastroClinicas';
import CadastroClientes from '../pages/CadastroClientes';
import CadastroMedicos from '../pages/CadastroMedicos';
import PesquisaClinicas from '../pages/PesquisaClinicas';
import AgendamentoConsultas from '../pages/AgendamentoConsultas';
import ListaConsultas from '../pages/ListaConsultas';
import Route from './Route';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin/clinica" component={SignInClinica} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/cadastrar/clinicas" exact component={CadastroClinicas} />
    <Route path="/cadastrar/clientes" exact component={CadastroClientes} />
    <Route path="/cadastrar/medicos" exact component={CadastroMedicos} />
    <Route path="/pesquisar" exact component={PesquisaClinicas} />
    <Route path="/agendar" exact component={AgendamentoConsultas} />
    <Route path="/listar" exact component={ListaConsultas} />

  </Switch>
);

export default Routes;
