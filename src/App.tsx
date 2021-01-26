import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import AppProvider from './hooks';
import Routes from './routes';
import  Footer  from './components/Footer';

const App: React.FC = () => (
  <Router>
      <Routes />
    <GlobalStyle />
  </Router>
);

export default App;
