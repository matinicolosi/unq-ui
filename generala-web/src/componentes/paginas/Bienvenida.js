import React from 'react'
import ModalBienvenida from '../auxiliares/ModalBienvenida.js'

const Bienvenida = (props) => {
  const jugar = () => {
    props.history.push('/juego');
  }

  return (
    <ModalBienvenida>
      <button type="button" className="btn btn-primary" onClick={ jugar }>Jugar</button>
    </ModalBienvenida>
  );
}

export default Bienvenida
