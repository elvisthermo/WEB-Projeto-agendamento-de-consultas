import React from 'react';

import './styles.css';

const ClinicasLista = ({clinicasLista}) => {
  return (
    <>
      { clinicasLista && clinicasLista.map((data, index) => {
        if (data) {
          return (
            <tr key={data.cnpj} className="table-row">
              <td className="clinica">{data.nome_fantasia}</td>
              <td className="endereço">{data.endereco}</td>
              <td className="cnpj">{data.cnpj}</td>
              <button className="myButton">Selecionar</button>
            </tr>
          )
        }
        return null;
      })}
    </>
  )
}

export default ClinicasLista;
