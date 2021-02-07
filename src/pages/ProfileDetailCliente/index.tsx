import React, { useCallback, useRef, ChangeEvent, useEffect, useState } from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, AvatarInput,Info } from './styles';
import { Link,useHistory} from 'react-router-dom';
import {FormHandles} from "@unform/core";


const ProfileDetailCliente: React.FC = (prop) => {
  const history = useHistory()
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard/clinica">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          onSubmit={()=>{}}
        >
          <AvatarInput>
            <img src={"http://cdn.onlinewebfonts.com/svg/img_87237.png"} alt={""} />

          </AvatarInput>

          <h1>Perfil do Cliente</h1>

          <h2>Nome: </h2> <Info>{localStorage.getItem('detailNome')}</Info>
          <h2>CFP: </h2> <Info>{localStorage.getItem('detailCpf')}</Info>
          <h2>Data de Nascimento: </h2> <Info>{localStorage.getItem('detailData_nascimento')}</Info>
          <h2>Endereço: </h2> <Info>{localStorage.getItem('detailEndereco')}</Info>
          <h2>email: </h2> <Info>{localStorage.getItem('detailEmail')}</Info>
          <h2>Telefone: </h2> <Info>{localStorage.getItem('detailTelefone')}</Info>
          <h2>Grupo de Risco: </h2> <Info>{localStorage.getItem('detailGrupo_de_risco')?"sim":"não"}</Info>

        </Form>
      </Content>
    </Container>
  );
};

export default ProfileDetailCliente;
