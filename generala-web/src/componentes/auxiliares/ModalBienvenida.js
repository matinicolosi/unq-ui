import React from 'react'
import '../aplicacion/estilos/ModalBienvenida.css'
import logo from '../../imagenes/logo.png';

const ModalBienvenida = ({ children }) => {
  return (
    <div className="modal modal-bienvenida">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col" />
                <div className="col-md-auto columna-central">
                  <div className="row justify-content-center">
                    <div className="col-md-auto">
                      <img src={ logo } width="100" height="60" alt="Logo" />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-auto">
                      Generala
                    </div>
                  </div>
                </div>
                <div className="col" />
              </div>
              <div className="row">
                <div className="col" />
                <div className="col-md-auto columna-central">
                  <div className="row justify-content-center">
                    <div className="col-md-auto">
                        { children }
                    </div>
                  </div>
                </div>
                <div className="col" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBienvenida
