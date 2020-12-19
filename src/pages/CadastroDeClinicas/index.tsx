import React, { useRef, useCallback } from 'react';
import { FiClipboard, FiArchive, FiBriefcase } from 'react-icons/fi';
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

const CadastroDeClinicas: React.FC = () => {
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
            <h1>Cadastre sua Clinica</h1>
            <Input name="nomeFantasia" icon={FiClipboard} placeholder="Digite o Nome fantazia da clinica" />

            <Input name="RazãoSocial" icon={FiClipboard} placeholder="Digite a Razão Social da clinica" />

            <Input name="cnpj" icon={FiArchive} placeholder="Digite o CNPJ" />

            <Input name="endereço" icon={FiBriefcase} placeholder="Digite o endereço" />
            <Input name="cep" icon={FiBriefcase} placeholder="Digite o Cep" />
            <Input name="numero" icon={FiBriefcase} placeholder="Digite o numero" />

            <Button type="submit">Cadastrar Clinica</Button>
          </Form>

        </AnimationContainer>
      </Content>

    </Container>
  );
};

export default CadastroDeClinicas;
