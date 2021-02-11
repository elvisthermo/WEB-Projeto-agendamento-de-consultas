import React, {useState, useEffect} from 'react';
import {
  FiClipboard, FiArchive,  FiMail, FiArrowLeft,
} from 'react-icons/fi';
import { FaBirthdayCake } from 'react-icons/fa';

import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';



import logoImg from '../../assets/logo.svg';

import {
  Container, Content, AnimationContainer,Select
} from './styles';

import Input from '../../components/Input';

import Button from '../../components/Button';
import { Background } from '../SignIn/styles';
import api from "../../services/api";
import { loadEspecialidades } from '../../services/requisicoes';
import { Especialidade } from '../../Interfaces/Especialidade';


const CadastroDeMedicos: React.FC = () => {
  const [crm,setCrm] = useState("");
  const [nome,setnome] = useState("");
  const [cpf,setCpf] = useState("");
  const [email,setEmail] = useState("");
  const [data_nascimento,setData_nascimento] = useState("")
  const [telefone,setTelefone] = useState("")
  const [especialidade,setEspecialidade] = useState<Especialidade[]>([])
  const [selecEspecialidade,setSelectEspecialidade] = useState("");
  const history = useHistory();

  useEffect(()=>{
    async function loadApi() {
      const responseEspecialidade = await loadEspecialidades();
      setEspecialidade(responseEspecialidade);
    
    }
    loadApi();
  },[])

  async function handleAddMedicos(){
    try {
      // await api.post('/medico/',{
      //   "crm": crm,
      //   "nome": nome,
      //   "cpf": cpf,
      //   "data_nascimento":data_nascimento,
      //   "telefone": telefone,
      //   "email": email,
      //   "especialidade": selecEspecialidade,
      //   "url_img": "",
      //   "senha": "",
      // })
      //   .then((response) => {
      //     console.log(response);
      //     alert("Medico cadastrado");
      //     history.push('/dashboard/clinica');

      //   });



    } catch (err) {
      console.log(err.response.error);
    }

  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="web-consultas" />
          <Form onSubmit={handleAddMedicos}>
            <h1>Cadastrar médico</h1>

            <Input
              value={nome} onChange={(e)=>setnome(e.target.value)}
              name="nome" icon={FiClipboard} placeholder="Nome completo" required/>

            <Input 
              value={email} onChange={(e)=>setEmail(e.target.value)}
            name="email" type="email" icon={FiMail} placeholder="E-mail" />

            <Input
              value={telefone} onChange={(e)=>setTelefone(e.target.value)}
              name="crm" icon={FiArchive} placeholder="Digite o Telefone do médico" required/>

            <Input name="dataDeNascimento" 
            value={data_nascimento} onChange={(e)=>setData_nascimento(e.target.value)}
            type="text" icon={FaBirthdayCake} placeholder="data de nascimento" required/>

            <Input
              value={cpf} onChange={(e)=>setCpf(e.target.value)}
              name="cpf" icon={FiArchive} placeholder="Digite o CPF do médico" required/>

            <Input
              value={crm} onChange={(e)=>setCrm(e.target.value)}
              name="crm" icon={FiArchive} placeholder="Digite o CRM do médico" required/>


          <div>
            <Select
              onChange={(e)=>setSelectEspecialidade(e.target.value)}
              name="areaAtuacao" placeholder="Digite a área de atuação do médico" >
                <option value="0">Selecione a especialidade...</option>
                {especialidade 
                && especialidade.map(d=>(
                      <option value={d.id}>
                        {console.log("d:",d)}
                        {d.tipo}
                      </option>
                ))}
              </Select>
          </div>

            <Button type="submit">Cadastrar</Button>
            <Link to='/dashboard/clinica'>
              <FiArrowLeft/>
              Voltar
            </Link>
          </Form>

        </AnimationContainer>
      </Content>
    <Background/>
    </Container>
  );
};

export default CadastroDeMedicos;
