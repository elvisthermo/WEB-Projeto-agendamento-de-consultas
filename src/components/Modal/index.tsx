import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import Button from '../Button'
import Input from '../Input'

import './styles.css'

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

export const ModalBody: React.FC = ({ children }) => (
  <div className="modal-body">
    {children}

    <br />
        Alterar Medico
    <div className="div-select">

      <select name="" id="selectClinica" >
        <option>MED2</option>
        <option>MED3</option>
        <option>MED4</option>

      </select>
    </div>

    <label htmlFor="">Alterar Data:</label>
    <input id="date" className="modal-button" type="date"></input>

    <label htmlFor="">Alterar Horario da consulta</label>
    <input type="time" className="modal-button" id="time"
      min="09:00" max="18:00" required></input>


    <button className="modal-button agendarButton" type="submit">ok</button>
  </div>
)

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