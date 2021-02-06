import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import api from "../../services/api";
// interface SignInFormData {
//   email: string;
//   password: string;
// }

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const [clientes, setClientes] = useState();

  useEffect(() => {

    api.get('/cliente/').then((response) => {
      const clienteResponse = response.data;
      console.log(response.data)
      setClientes(clienteResponse);

    });

  }, []);

  const getCliente = () => {

    const inputEmail = document.getElementsByTagName('input')
    clientes.map(cliente => {
      //console.log(inputEmail[0].value)
      if (inputEmail[0].value === cliente.email) {
        console.log('aio')
        localStorage.setItem('Name', cliente.nome)
        localStorage.setItem('CPF', cliente.cpf)
        return cliente.email;
      } else return;
    })
  }

  const handleSubmit = useCallback(
    async (data) => {
      try {
        console.log(clientes)
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

        getCliente();
        //console.log(storagedEmail)
        history.push('/dashboard');
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
    [addToast, clientes],
  );


  return (
    <Container>
      <Content>
        <TopNavigation>
          <div className="wrapper">
            <div id="clinica"><Link to="/signin/clinica">Entrar como clínica</Link></div>
            <div id="pesquisa"><Link to="/pesquisar"><FiSearch />Pesquisar Clínicas</Link></div>
          </div>
        </TopNavigation>
        <AnimationContent>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
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
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContent>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
