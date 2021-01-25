import React, { useCallback, useRef, ChangeEvent } from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, AvatarInput,Info } from './styles';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link} from 'react-router-dom';
import {FormHandles} from "@unform/core";

interface DataCard{
  type: String;
  title: String;
  value: String;
}

const Profile: React.FC = (prop) => {
  const formRef = useRef<FormHandles>(null);

  const cliente ={

  }

  console.log(prop);

  function handleSubmit(){

  }

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={"https://avatars.githubusercontent.com/u/18222474?s=400&u=a44915ff97d6a496965f7fe28b3a4a068950626f&v=4"} alt={"teste"} />
            {/*<img src={"data:image/png;base64,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"} alt={"teste"} />*/}

          </AvatarInput>

          <h1>Perfil do Cliente</h1>

          <h2>Nome: </h2> <Info>Elvis Thermo</Info>
          <h2>CFP: </h2> <Info>02798415233</Info>
          <h2>Data de Nascimento: </h2> <Info>09/08/1997</Info>
          <h2>Endereço: </h2> <Info>Rua dos trabalhadores 96</Info>
          <h2>email: </h2> <Info>elv@gmailcom</Info>
          <h2>Telefone: </h2> <Info>(91)98212-6057</Info>
          <h2>Grupo de Risco: </h2> <Info>não</Info>

          {/*<h1>Perfil do Médico</h1>*/}

          {/*<h2>Nome: </h2> <Info>Dr Mata tudo</Info>*/}
          {/*<h2>CRM: </h2> <Info>5750511722</Info>*/}
          {/*<h2>CPF: </h2> <Info>4224525422</Info>*/}
          {/*<h2>Data de Nascimento: </h2> <Info>09/08/1997</Info>*/}
          {/*<h2>Area De Atuacao: </h2> <Info>Oftalmologia</Info>*/}
          {/*<h2>email: </h2> med@gmail.com</Info>*/}
          {/*<h2>Telefone: </h2> <Info>(91)98212-6057</Info>*/}


          {/*<h1>Perfil do Clinica</h1>*/}

          {/*<h2>Nome: </h2> <Info>Clinica gota de beleza</Info>*/}
          {/*<h2>CNPJ: </h2> <Info>5750511722</Info>*/}
          {/*<h2>Email:: </h2> <Info>cbel@gmail.com</Info>*/}
          {/*<h2>Endereço: </h2> <Info>lameda dos anjos</Info>*/}
          {/*<h2>Telefone: </h2> <Info>(91)98212-6057</Info>*/}

        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
