import React, { useRef, useCallback } from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail, FiSearch
} from 'react-icons/fi';
import { FaBirthdayCake } from 'react-icons/fa';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import validationErrors from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContainer, Background, Background2
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';

import {
  TopNavigation
} from '../SignIn/styles';

import './style.css';


interface SignInFormData {
  email: string;
  password: string;
}

const PesquisaDeClinicas: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = validationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
      });
    }
  }, [signIn, addToast, history]);



  return (
    <Container>
      <Background />
      <Content>
        <TopNavigation>
            <div className="wrapper">
              <div id="clinica"> <Link to="/signin/clinica">Entrar como clínica</Link></div>
              <div id="pesquisa"> <Link to="/pesquisar"><FiSearch/>Pesquisar Clínicas</Link> </div>
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
                    <h1 className="header">Que tipo de atendimento você está procurando?</h1>
                    <p className="sub-header"><strong>Com a carterinha do seu convênio em mãos, escolha uma das opções abaixo:</strong></p>
                  </div>
                  <div className="options-container">
                    <div className="options-wrapper">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="radio-container">
              <ul id="radio-wrapper">
                <li>
                  <input type="radio" id="f-option" name="selector"/>
                  <label htmlFor="f-option">Teleconsulta</label>

                  <div className="check"></div>
                </li>
                <li>
                  <input type="radio" id="s-option" name="selector"/>
                  <label htmlFor="s-option">Consulta a domicílio</label>
                  <div className="check"><div className="inside"></div></div>
                </li>
                <li>
                  <input type="radio" id="t-option" name="selector"/>
                  <label htmlFor="t-option">Consulta presencial</label>

                  <div className="check"><div className="inside"></div></div>
                </li>
                </ul>
            </div>

            <div id="cover">
              <form className="form-pesquisa" method="get" action="">
                <div className="tb">
                  <div className="td"><input className="inputo" type="text" placeholder="Procurar" required /></div>
                  <div className="td" id="s-cover">
                    <button type="submit">
                      <div id="s-circle"></div>
                      <span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        </AnimationContainer>
      </Content>
      <Background2 />
    </Container>

  );
};
export default PesquisaDeClinicas;
