import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock, FiSearch, FiAirplay } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background, AnimationContent, TopNavigation } from './styles';
import validationErrors from '../../Utils/getValidationErrors';
import api from '../../services/api';


const CadastrarEspecialidade: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const [especialidade,setEspecialidade] = useState("");


  const handleSubmit = useCallback(
    async (data) => {
      try {
        await api.post('/especialidade/', {
         "tipo":especialidade
        })
        .then((response) => {
          alert("Especialidade Cadastrada");
          history.push('/dashboard/clinica');
       
        });
      } catch (error) {
        console.log(error);
      
      }
    },
    [ especialidade],
  );


  return (
    <Container>
      <Content>
        <TopNavigation>
          <div className="wrapper">
            <div id="clinica"><Link to="/dashboard/clinica">voltar</Link></div>
            <div id="pesquisa"><Link to="/sair"><FiSearch />sair</Link></div>
          </div>
        </TopNavigation>
        <AnimationContent> 

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastre um novo tipo de especialidade</h1>
            <Input
              name="especialidade"
              value={especialidade}
              onChange={(e)=>setEspecialidade(e.target.value)}
              icon={FiAirplay}
              type="text"
              placeholder="Digite a nova especialidade"
              required
            />
            <Button type="submit">Entrar</Button>
          </Form>
        </AnimationContent>
      </Content>
    </Container>
  );
};

export default CadastrarEspecialidade;
