import React, {useRef, useCallback, useState, FormEvent, useEffect} from 'react';
import { FiClipboard, FiArchive, FiBriefcase, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import validationErrors from '../../Utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContent,
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';
import { Background } from '../SignIn/styles';
import api from "../../services/api";
import {async} from "q";
import { getCliente } from '../../Utils/Utils';
import { loadClinicasById } from '../../services/requisicoes';
import { Cliente } from '../../Interfaces/Clientes';
import { Clinicas } from '../../Interfaces/Clinicas';

interface SignInFormData {
  email: string;
  password: string;
}

const CadastroDeClinicas: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);

  const [cnpj,setCnpj] = useState("")
  const [razao_social,setRazao_social] = useState("");
  const [nome_fantazia,setNome_fanzatia] = useState("");
  const [endereco,setEndereco] = useState("");
  const [telefone,setTelefone] = useState("");
  const [clinicas,setClinicas] = useState<Clinicas>();
  const { addToast } = useToast();
  const history = useHistory();

  useEffect(()=>{
    async function loadApi() {
      const storeCnpj = localStorage.getItem('CNPJ')
        
      const clinicasById = await loadClinicasById(storeCnpj);
      console.log(clinicasById);
      setClinicas(clinicasById);
      setCnpj(clinicasById?.cnpj);
      setRazao_social(clinicasById?.razao_social);
      setNome_fanzatia(clinicasById?.nome_fantasia);
      setEndereco(clinicasById?.endereco);
      setTelefone(clinicasById?.telefone)
    }
    loadApi();

  },[])

  function handleAddClinicas(event:FormEvent<HTMLFormElement>):void{
    try {
      api.put(`/clinica/${clinicas?.cnpj}/`,{
        "cnpj": cnpj,
        "razao_social": razao_social,
        "nome_fantasia": nome_fantazia,
        "endereco": endereco,
        "telefone": telefone,
        // "url_img": string,
        // "email": string,
        // "senha": string
      });
    
      alert("Perfil Atualizado");
      history.push('/dashboard/clinica');
    } catch (err) {
      console.log(err.response.error);
    }
  }

  return (
    <Container>
      <Background/>
      <Content>
        <AnimationContent>
          <img src={logoImg} alt="web-consultas" />
          <Form onSubmit={(e)=> handleAddClinicas(e)}>
            <h1>Editar Perfil da Clínica</h1>
            <Input
              value={nome_fantazia} onChange={(e)=>setNome_fanzatia(e.target.value)}
              name="nomeFantasia" icon={FiClipboard} placeholder="Nome fantasia" />

            <Input
              value={razao_social} onChange={(e)=>setRazao_social(e.target.value)}     
              name="RazãoSocial" icon={FiClipboard} placeholder="Razão social" />

            <Input
              value={cnpj} onChange={(e)=> setCnpj(e.target.value)}
              name="cnpj" icon={FiArchive} placeholder="CNPJ" />

            <Input
              value={endereco} onChange={(e)=> setEndereco(e.target.value)}
              name="endereço" icon={FiBriefcase} placeholder="Endereço" />

            <Input 
            value={telefone} onChange={(e)=> setTelefone(e.target.value)}
            name="contato" icon={FiBriefcase} placeholder="Contato" />

            <Button type="submit">Atualizar Informações</Button>
            <Link to="/dashboard/clinica">
              <FiArrowLeft/>
              Voltar
            </Link>
          </Form>

        </AnimationContent>
      </Content>

    </Container>
  );
};

export default CadastroDeClinicas;
