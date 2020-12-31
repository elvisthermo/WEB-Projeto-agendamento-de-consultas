import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignInClinica from '../pages/SignInClinica';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import CadastroDeClinicas from '../pages/CadastroDeClinicas';
import CadastroDeClientes from '../pages/CadastroDeClientes';
import CadastroDeMedicos from '../pages/CadastroDeMedicos';
import PesquisaDeClinicas from '../pages/PesquisaDeClinicas';
import Route from './Route';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin/clinica" component={SignInClinica} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/cadastrar/clinicas" exact component={CadastroDeClinicas} />
    <Route path="/cadastrar/clientes" exact component={CadastroDeClientes} />
    <Route path="/cadastrar/medicos" exact component={CadastroDeMedicos} />
    <Route path="/pesquisar" exact component={PesquisaDeClinicas} />
  </Switch>
);

export default Routes;
