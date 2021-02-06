import { Clinicas } from '../Interfaces/Clinicas';
import { Consultas } from '../Interfaces/Consultas';
import api from './../services/api';

export function loadConsultas() {
    let consultasResponse = api.get('/consulta/').then((response) => {
        return consultasResponse = response.data;
    });
    return consultasResponse;
}

export function  loadClinicas() {
    let clinicaResponse = api.get('/clinica/').then((response) => {
        return clinicaResponse = response.data;
    });
    return clinicaResponse;
}

export function loadMedicos() {
    let medicoResponse = api.get('/medico/').then((response) => {
       return medicoResponse = response.data;
    });
    return medicoResponse;

}

export function updateConsulta(consulta:Consultas) {
    try {
        api.put(`/consulta/${consulta.id}/`, {
            "id": consulta.id,
            "numero_consulta": consulta.numero_consulta,
            "data": consulta.data,
            "hora": consulta.hora,
            "tipo_consulta": consulta.tipo_consulta,
            "cliente_cpf": consulta.cliente_cpf,
            "medico_crm": consulta.medico_crm,
            "clinica_cnpj": consulta.clinica_cnpj

        }).then((response) => {
            const reponseConsulta = response.data;
            console.log(reponseConsulta);
            return reponseConsulta;
        });
    } catch (err) {
        console.log(err.response.error);
    }
}

export function loadEspecialidades() {
    let especialidadesResponse = api.get('/especialidade/').then((response) => {
        return especialidadesResponse = response.data;
    });
    return especialidadesResponse;

}

export function loadCliente() {
    let clienteResponse = api.get('/cliente/').then((response) => {
        return clienteResponse = response.data;
    });
    return clienteResponse

}