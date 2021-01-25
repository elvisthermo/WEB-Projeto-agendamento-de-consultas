import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignInClinica from '../pages/SignInClinica';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import DashboardClinica from '../pages/DashboardClinica';
import CadastroClinicas from '../pages/CadastroClinicas';
import CadastroClientes from '../pages/CadastroClientes';
import CadastroMedicos from '../pages/CadastroMedicos';
import PesquisaClinicas from '../pages/PesquisaClinicas';
import AgendamentoConsultas from '../pages/AgendamentoConsultas';
import ListaConsultas from '../pages/ListaConsultas';
import ListaMedicos from '../pages/ListaMedicos';
import ListaPacientes from '../pages/ListaPacientes';
import ListaClinicas from "../pages/ListaClinicas";
import AdministrarConsultas from "../pages/AdministrarConsultas";
import Profile from '../pages/Profile';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin/clinica" component={SignInClinica} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/dashboard/clinica" exact component={DashboardClinica} />
    <Route path="/cadastrar/clinica" exact component={CadastroClinicas} />
    <Route path="/cadastrar/cliente" exact component={CadastroClientes} />
    <Route path="/cadastrar/medico" exact component={CadastroMedicos} />
    <Route path="/pesquisar" exact component={PesquisaClinicas} />
    <Route path="/agendar" exact component={AgendamentoConsultas} />
    <Route path="/listar/consultas" exact component={ListaConsultas} />
    <Route path="/listar/clinicas" exact component={ListaClinicas} />
    <Route path="/listar/medicos" exact component={ListaMedicos} />
    <Route path="/listar/pacientes" exact component={ListaPacientes} />
    <Route path="/administrar/consultas" exact component={AdministrarConsultas} />
    <Route path="/perfil" exact component={Profile} />

  </Switch>
);

export default Routes;
