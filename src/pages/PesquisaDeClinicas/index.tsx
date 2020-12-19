import React, { useRef, useCallback } from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail,
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
  Container, Content, AnimationContainer,
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';

import './App.css';

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
      <div className="especialidade-medico">
        <div className="container">
          <div className="especialidade-medico content">
            <div className="left-sidebar"><h1 className="underlined-left">Vamos começar!</h1></div>
            <div className="right-sidebar">
              <div className="header-wrapper">
                <div className="header-container">
                  <h1 className="header">Que tipo de atendimento você está procurando?</h1>
                  <p className="sub-header"><strong>Com a carterinha do seu convênio em mãos, escolha uma das opções abaixo:</strong></p>
                </div>
              </div>
              <div className="search-wrapper">
                <div className="search-container">
                  <div className="especialidade-medico-content">
                    <div className="modalidade">
                      <select className="select-box">
                        <option className="default-option" value="0">Escolha a modalidade...</option>
                        <option className="clinica"value="1">Atendimento na clínica</option>
                        <option className="teleconsulta"value="2">Atendimento via teleconsulta</option>
                        <option className="domicilio"value="3">Atendimento a domicilio</option>
                      </select>
                      <div className="select-arrow"></div>
                    </div>
                    <div className="especialidade">
                      <button className="especialidade-button" disabled>especialidade</button>
                    </div>
                    <div className="clinica">
                      <button className="clinica-button" disabled>clínica</button>
                    </div>
                  </div>
                  <div className="searchbox-container">
                    < input className="searchbox"type="text" placeholder="Procurar..."></ input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Container>

  );
};
export default PesquisaDeClinicas;
