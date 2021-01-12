import React, { useRef, useCallback } from 'react';
import {
  FiClipboard, FiArchive, FiFile, FiLock, FiMail, FiArrowLeft
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

interface SignInFormData {
  email: string;
  password: string;
}

const CadastroDeClientes: React.FC = () => {
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
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="web-consultas" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastre-se</h1>
            <Input name="nome" icon={FiClipboard} placeholder="Digite o Nome completo" />

            <Input name="emal" type="email" icon={FiMail} placeholder="Digite seu Email" />

            <Input name="dataDeNascimento" type="date" icon={FaBirthdayCake} placeholder="Digite sua data de nascimento" />

            <Input name="cpf" icon={FiArchive} placeholder="Digite o CPF" />

            <Input name="validarIdentidade" type="file" icon={FiFile} placeholder="envie a foto de seu documento de identidade" />

            <Input name="password" icon={FiLock} type="password" placeholder="Digite sua senha" />

            <Input name="passwordConfirmar" icon={FiLock} type="password" placeholder="Digite sua senha" />

            <Button type="submit">Cadastre se</Button>
            <Link to="/">
              <FiArrowLeft/>
              Voltar
            </Link>
          </Form>

        </AnimationContainer>
      </Content>

    </Container>
  );
};

export default CadastroDeClientes;
