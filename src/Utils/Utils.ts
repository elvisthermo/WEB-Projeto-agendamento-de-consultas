export const getClinicaNome = (cnpj:String,clinicas:any)=> {
    const clinicaNome = clinicas && clinicas.map(clinica => {
      if (clinica.cnpj === cnpj) {
        return clinica.razao_social;
      }
    });
    return clinicaNome;
  }

 export const getClienteNome=(cpf:String,clientes:any)=> {
    const clienteNome = clientes && clientes.map(cliente => {
      if (cliente.cpf === cpf) {
        return cliente.nome;
      }
    })
    return clienteNome;
  }

  export const getEspecialidade =(crm,medicos)=> {
    const especialidade = medicos && medicos.map(medico => {
      if (medico.crm === crm) {
        return getEspecialidadeNome(medico.especialidade,especialidade);
      }
    });
    return especialidade;
  }

  export const getEspecialidadeNome= (id,especialidades) => {
    const especialidadeNome = especialidades && especialidades.map(especialidade => {
      if (especialidade.id === id) {
        return especialidade.tipo;
      }
    });
    return especialidadeNome
  }


  export const getMedicoNome =(crm,medicos) => {
    const medicoNome = medicos && medicos.map(medico => {
      if (medico.crm === crm) {
        return medico.nome;
      }
    })
    return medicoNome;
  }
  