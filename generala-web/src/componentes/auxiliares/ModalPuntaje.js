import React from 'react'
import '../aplicacion/estilos/ModalPuntaje.css'

const ModalPuntaje = ({ children, puntajes, ronda, tiro }) => {
  return (
    <div>
      <div className="card cuersetPo-tabla-puntaje">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col contenido-tabla-puntaje">
                <h4>Información</h4>
                <div className="text-muted">Puntaje: { puntajes.puntaje }</div>
                <div className="text-muted">Generala: { puntajes.puntajeGenerala }</div>
                <div className="text-muted">Poker: { puntajes.puntajePoker }</div>
                <div className="text-muted">Full: { puntajes.puntajeFull }</div>
                <div className="text-muted">Escalera: { puntajes.puntajeEscalera }</div>
                <div className="text-muted">1: { puntajes.puntaje1 }</div>
                <div className="text-muted">2: { puntajes.puntaje2 }</div>
                <div className="text-muted">3: { puntajes.puntaje3 }</div>
                <div className="text-muted">4: { puntajes.puntaje4 }</div>
                <div className="text-muted">5: { puntajes.puntaje5 }</div>
                <div className="text-muted">6: { puntajes.puntaje6 }</div>
                <p/>
                <div className="text-muted:bold">Ronda: { ronda }</div>
                <div className="text-muted:bold">Tiro: { tiro }</div>
              </div>
            </div>
            <p/>
            { children }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPuntaje
