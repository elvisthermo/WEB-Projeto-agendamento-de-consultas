import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { Consultas } from '../../Interfaces/Consultas'
import { updateConsulta } from '../../services/requisicoes'
import './styles.css'
import { Medico } from '../../Interfaces/Medicos'
import { Link, useHistory } from 'react-router-dom'

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, toggle, children }) => {
  useEffect(() => {
    const listner = function (e: KeyboardEvent) {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        isShowing && toggle();
      }
    }

    window.addEventListener('keyup', listner)

    return (() => {
      window.removeEventListener('keyup', listner)
    })

  }, [isShowing, toggle])

  return (
    isShowing ? ReactDom.createPortal(
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <div className="modal">
            {children}
          </div>
        </div>
      </div>, document.body
    ) : null
  )
}

interface ModalHeaderProps {
  toggle: () => void;
}


export const ModalHeader: React.FC<ModalHeaderProps> = ({ toggle, children }) => (
  <div className="modal-header">
    {children || 'Title'}
    <button
      className="modal-button-close"
      data-dismiss="modal"
      aria-label="Close"
      onClick={toggle}
    >
      &times;
    </button>
  </div>
)

interface ConstasProps {
  consulta: Consultas;
  medicos: Medico[];
}


export const ModalBody: React.FC<ConstasProps> = ({ consulta, medicos, children }) => {
  const [medicoSelecionado, setMedicoSelecionado] = useState("");
  const [updateData, setUpdateData] = useState("")
  const [updateHora, setUpdateHora] = useState("")

  const history = useHistory()


  async function handleUpdateConsulta() {
    consulta.medico_crm = medicoSelecionado;
    consulta.hora = updateHora;
    consulta.data = updateData;
    
    await updateConsulta(consulta);

    alert("Consulta atualizada");
    history.push('/dashboard/clinica');

  }

  return (
    <div className="modal-body">
      <br />
        Alterar Medico
      <div className="div-select">

        <select id="selectClinica" 
        onChange={(e) => setMedicoSelecionado(e.target.value)}>
          {
            medicos && medicos.map((d, i) => (
              <option value={d.crm} key={d.nome}>{d.nome}</option>
            ))
          }
        </select>
      </div>

      <label htmlFor="">Alterar Data:</label>
      <input
        value={updateData} onChange={(e) => setUpdateData(e.target.value)}
        id="date" className="modal-button" type="date"></input>

      <label htmlFor="">Alterar Horario da consulta</label>
      <input
        value={updateHora} onChange={(e) => setUpdateHora(e.target.value)}
        type="time" className="modal-button" id="time"
        min="09:00" max="18:00" required></input>


      <button
        onClick={() => handleUpdateConsulta()}
        className="modal-button agendarButton" type="submit">Atualizar</button>
    </div>
  )
}


export const ModalFooter: React.FC = ({ children }) => (
  <div className="modal-footer">
    {children}
  </div>
)

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
}

export default Modal;