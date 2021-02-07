import React, { useCallback, useRef, ChangeEvent } from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, AvatarInput, Info } from './styles';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from "@unform/core";

const ProfileDetailMedico: React.FC = (prop) => {
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
          onSubmit={() => {}}
        >

          <AvatarInput>
            <img src={"https://images.vexels.com/media/users/3/144185/isolated/preview/a9075b02366ea61e8995f8d5b08d0267-dibujos-animados-m--dico-plana-by-vexels.png"} alt={""} />

          </AvatarInput>

          <h1>Perfil do Médico</h1>

          <h2>Nome: </h2> <Info>{localStorage.getItem('detailNome')}</Info>
          <h2>CRM: </h2> <Info>{localStorage.getItem('detailCrm')}</Info>
          <h2>CPF: </h2> <Info>{localStorage.getItem('detailCpf')}</Info>
          <h2>Data de Nascimento: </h2> <Info>{localStorage.getItem('detailData_nascimento')}</Info>
          <h2>Area De Atuacao: </h2> <Info>{localStorage.getItem('detailEspacialidade')}</Info>
          <h2>email:</h2><Info>{localStorage.getItem('detailEmail')}</Info>
          <h2>Telefone: </h2> <Info>{localStorage.getItem('detailTelefone')}</Info>


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

export default ProfileDetailMedico;
