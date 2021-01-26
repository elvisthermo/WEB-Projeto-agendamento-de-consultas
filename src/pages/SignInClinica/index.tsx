import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock, FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import { Container, Content, Background, AnimationContent, TopNavigation } from './styles';
import logo from '../../assets/logo.svg';
import validationErrors from '../../Utils/getValidationErrors';


interface SignInFormData {
  email: string;
  password: string;
}

const SignInClinica: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();



  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um email válido')
            .required('Email obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        history.push('/dashboard/clinica');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        if (error instanceof Yup.ValidationError) {
          const errors = validationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credências.',
          type: 'error',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>

      <TopNavigation>
        <div className="wrapper">
          <div id="clinica"> <Link to="/">Entrar como paciente</Link></div>
          <div id="pesquisa"> <Link to="/pesquisar/"><FiSearch/>Pesquisar Clínicas</Link> </div>
        </div>
      </TopNavigation>

      <Content>
        <AnimationContent>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login como clínica</h1>
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <Link to="/cadastrar/clinicas">
            <FiLogIn />
            Criar conta da clínica
          </Link>
        </AnimationContent>
      </Content>
      <Background />
    </Container>
  );
};

export default SignInClinica;
