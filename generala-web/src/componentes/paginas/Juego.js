import React, { useState } from 'react'
import ModalPuntaje from '../auxiliares/ModalPuntaje.js'
import Toast from '../auxiliares/Toast.js'
import dado1 from '../../imagenes/cara-uno.png';
import dado2 from '../../imagenes/cara-dos.png';
import dado3 from '../../imagenes/cara-tres.png';
import dado4 from '../../imagenes/cara-cuatro.png';
import dado5 from '../../imagenes/cara-cinco.png';
import dado6 from '../../imagenes/cara-seis.png';
import '../aplicacion/estilos/Label.css'
import '../aplicacion/estilos/Button.css'

const Juego = () => {
  const [numeroTiro, setNumeroTiro] = useState(0);
  const [ronda, setRonda] = useState(1);
  const [estadoTirarDados, setEstadoTirarDados] = useState([true, true, true, true, true]);
  const [valoresDados, setValoresDados] = useState([1, 2, 3, 4, 5]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [posiblesJuegos, setPosiblesJuegos] = useState(
    {
      generala: false,
      poker: false,
      full: false,
      escalera: false,
      numero1: false,
      numero2: false,
      numero3: false,
      numero4: false,
      numero5: false,
      numero6: false
    }
  );

  const [puntajes, setPuntajes] = useState(
    {
      puntaje: 0,
      puntajeGenerala: 0,
      puntajePoker: 0,
      puntajeFull: 0,
      puntajeEscalera: 0,
      puntaje1: 0,
      puntaje2: 0,
      puntaje3: 0,
      puntaje4: 0,
      puntaje5: 0,
      puntaje6: 0
    }
  );

  const imagenDado = [dado1, dado2, dado3, dado4, dado5, dado6];

  const puedeAplicarGenerala = (listaValores) => {
    var hayPosibilidadGenerala = true;
    for(var i = 0; i <= 3 && hayPosibilidadGenerala; i++) {
      if(listaValores[i] !== listaValores[i + 1]) {
        hayPosibilidadGenerala = false;
      }
    }
    return hayPosibilidadGenerala;
  }

  const puedeAplicarPoker = (listaValores) => {
    var hayPosibilidadPoker = true;
    for(var i = 0; i <= 2 && hayPosibilidadPoker; i++) {
      if(listaValores[i] !== listaValores[i + 1]) {
        hayPosibilidadPoker = false;
      }
    }
    if(!hayPosibilidadPoker) {
      for(i = 1; i <= 3 && hayPosibilidadPoker; i++) {
        if(listaValores[i] !== listaValores[i + 1]) {
          hayPosibilidadPoker = false;
        }
      }
    }
    return hayPosibilidadPoker;
  }

  const puedeAplicarFull = (listaValores) => {
    console.log("Chequeando full");
    console.log(listaValores);
    var hayGrupoDe2Repetidos = false;
    var hayGrupoDe3Repetidos = false;
    var contadorRepetidos = 1;
    for(var i = 0; i <= 3; i++) {
      if(listaValores[i] === listaValores[i + 1]) {
        contadorRepetidos++;
      } else {
        if(contadorRepetidos === 2) {
          hayGrupoDe2Repetidos = true;
        } else if(contadorRepetidos === 3) {
          hayGrupoDe3Repetidos = true;
        }
        contadorRepetidos = 1;
      }
    }
    if(contadorRepetidos === 2) {
      hayGrupoDe2Repetidos = true;
    } else if(contadorRepetidos === 3) {
      hayGrupoDe3Repetidos = true;
    }
    return (hayGrupoDe2Repetidos && hayGrupoDe3Repetidos);
  }

  const puedeAplicarEscalera = (listaValores) => {
    var numeroMasChico = listaValores[0];
    if(numeroMasChico === 1 || numeroMasChico === 2) {
      for(var i = 1; i <= 4; i++) {
        if(numeroMasChico !== (listaValores[i] - 1)) {
          return false;
        }
        numeroMasChico = listaValores[i];
      }
      return true;
    }
  }

  const tirarDados = () => {
    const anterioresValores = valoresDados;
    const nuevosValoresDados = [];
    for(var i = 0; i <= 4; i++) {
      if(estadoTirarDados[i]) {
        const numeroRandom = Math.floor(Math.random() * (7 - 1)) + 1;
        nuevosValoresDados.push(numeroRandom);
      } else {
        nuevosValoresDados.push(anterioresValores[i]);
      }
    }
    const valoresOrdenados = nuevosValoresDados.map((x) => x);;
    valoresOrdenados.sort((a, b) => a - b);
    
    const nuevosPosiblesJuegos = posiblesJuegos;
    if(puedeAplicarGenerala(valoresOrdenados)) {
      nuevosPosiblesJuegos.generala = true;
    }
    if(puedeAplicarPoker(valoresOrdenados)) {
      nuevosPosiblesJuegos.poker = true;
    }
    if(puedeAplicarFull(valoresOrdenados)) {
      nuevosPosiblesJuegos.full = true;
    }
    if(puedeAplicarEscalera(valoresOrdenados)) {
      nuevosPosiblesJuegos.escalera = true;
    }
    setValoresDados(nuevosValoresDados);
    setNumeroTiro(numeroTiro + 1);
    setPosiblesJuegos(nuevosPosiblesJuegos);
  }

  const siguienteRonda = () => {
    setRonda(ronda + 1);
    setNumeroTiro(0);
    setEstadoTirarDados([true, true, true, true, true]);
  }

  const resetear = () => {
    setPuntajes(
      {
        puntaje: 0,
        puntajeGenerala: 0,
        puntajeGeneralaDoble: 0,
        puntajePoker: 0,
        puntajeFull: 0,
        puntajeEscalera: 0,
        puntaje1: 0,
        puntaje2: 0,
        puntaje3: 0,
        puntaje4: 0,
        puntaje5: 0,
        puntaje6: 0
      }
    );

    setPosiblesJuegos(
      {
        generala: false,
        poker: false,
        full: false,
        escalera: false,
        numero1: false,
        numero2: false,
        numero3: false,
        numero4: false,
        numero5: false,
        numero6: false
      }
    );

    setValoresDados([1, 2, 3, 4, 5]);
    setEstadoTirarDados([true, true, true, true, true]);
    setRonda(1);
    setNumeroTiro(0);
  }

  const cambioTirarDado = (indiceDado) => (evento) => {
    const nuevosValores = estadoTirarDados;
    nuevosValores[indiceDado] = evento.target.checked;
    setEstadoTirarDados(nuevosValores);
  }

  const seleccionarCategoria = (event) => {
    setCategoriaSeleccionada(event.target.value);
  }

  const aplicarPuntaje = () => {
    var nuevosPuntajes = {...puntajes};
    var cambioPuntaje = true;
    switch (categoriaSeleccionada) {
      case "Generala":
        nuevosPuntajes.puntajeGenerala += 60;
        nuevosPuntajes.puntaje += 60;
        break;
      case "Poker":
        nuevosPuntajes.puntajePoker += 40;
        nuevosPuntajes.puntaje += 40;
        break;
      case "Full":
        nuevosPuntajes.puntajeFull += 30;
        nuevosPuntajes.puntaje += 30;
        break;
      case "Escalera":
        nuevosPuntajes.puntajeEscalera += 20;
        nuevosPuntajes.puntaje += 20;
        break;
      case "juego1":
        var valor = valorJuegoDe(1);
        nuevosPuntajes.puntaje1 += valor;
        nuevosPuntajes.puntaje += valor;
        break;
      case "juego2":
        valor = valorJuegoDe(2);
        nuevosPuntajes.puntaje2 += valor;
        nuevosPuntajes.puntaje += valor;
        break;
      case "juego3":
        valor = valorJuegoDe(3);
        nuevosPuntajes.puntaje3 += valor;
        nuevosPuntajes.puntaje += valor;
        break;
      case "juego4":
        valor = valorJuegoDe(4);
        nuevosPuntajes.puntaje4 += valor;
        nuevosPuntajes.puntaje += valor;
        break;
      case "juego5":
        valor = valorJuegoDe(5);
        nuevosPuntajes.puntaje5 += valor;
        nuevosPuntajes.puntaje += valor;
        break;
      case "juego6":
        valor = valorJuegoDe(6);
        nuevosPuntajes.puntaje6 += valor;
        nuevosPuntajes.puntaje += valor;
        break;
      default:
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3000);
        cambioPuntaje = false;
        break;
    }
    if(cambioPuntaje) {
      setPuntajes(nuevosPuntajes);
      setRonda(ronda + 1);
      setNumeroTiro(0);
      setEstadoTirarDados([true, true, true, true, true]);
      setCategoriaSeleccionada("");
    }
  }

  const valorJuegoDe = (numeroBuscado) => {
    var apariciones = 0;
    valoresDados.forEach(valor => {
      if(valor === numeroBuscado) {
        apariciones++;
      }
    });
    return numeroBuscado * apariciones;
  }

  return (
    <div>
      <ModalPuntaje puntajes={ puntajes } ronda={ ronda } tiro={ numeroTiro } juegos={ posiblesJuegos }>
        <div className="row">
          <div className="col-md-auto">
            <div className="row-md-auto">
              <img src={ imagenDado[valoresDados[0] - 1] } width="70" height="70" alt="Dado 1" />
            </div>
            {numeroTiro !== 0 && numeroTiro !== 3 && <div className="row-md-auto">
                <input type="checkbox" defaultChecked={ true } onChange={ cambioTirarDado(0) } />
                <label className="label-negro" htmlFor="flexCheckCheckedDisabled">Tirar dado 1</label>
              </div>
            }
          </div>
          <div className="col-md-auto">
            <div className="row-md-auto">
              <img src={ imagenDado[valoresDados[1] - 1] } width="70" height="70" alt="Dado 2" />
            </div>
            {numeroTiro !== 0 && numeroTiro !== 3 && <div className="row-md-auto">
                <input type="checkbox" defaultChecked={ true } onChange={ cambioTirarDado(1) } />
                <label className="label-negro" htmlFor="flexCheckCheckedDisabled">Tirar dado 2</label>
              </div>
            }
          </div>
          <div className="col-md-auto">
            <div className="row-md-auto">
              <img src={ imagenDado[valoresDados[2] - 1] } width="70" height="70" alt="Dado 3" />
            </div>
            {numeroTiro !== 0 && numeroTiro !== 3 && <div className="row-md-auto">
                <input type="checkbox" defaultChecked={ true } onChange={ cambioTirarDado(2) } />
                <label className="label-negro" htmlFor="flexCheckCheckedDisabled">Tirar dado 3</label>
              </div>
            }
          </div>
          <div className="col-md-auto">
            <div className="row-md-auto">
              <img src={ imagenDado[valoresDados[3] - 1] } width="70" height="70" alt="Dado 4" />
            </div>
            {numeroTiro !== 0 && numeroTiro !== 3 && <div className="row-md-auto">
                <input type="checkbox" defaultChecked={ true } onChange={ cambioTirarDado(3) } />
                <label className="label-negro" htmlFor="flexCheckCheckedDisabled">Tirar dado 4</label>
              </div>
            }
          </div>
          <div className="col-md-auto">
            <div className="row-md-auto">
              <img src={ imagenDado[valoresDados[4] - 1] } width="70" height="70" alt="Dado 5" />
            </div>
            {numeroTiro !== 0 && numeroTiro !== 3 && <div className="row-md-auto">
                <input type="checkbox" defaultChecked={ true } onChange={ cambioTirarDado(4) } />
                <label className="label-negro" htmlFor="flexCheckCheckedDisabled">Tirar dado 5</label>
              </div>
            }
          </div>
        </div>
      </ModalPuntaje>
      <p/>
      {ronda <= 9 && numeroTiro !== 0 && <div className="row justify-content-center">
        <div className="col-md-auto">
          <div className="row justify-content-center">
              <select className="form-select" aria-label="Default select example">
                        <option selected>Seleccione una categoría</option>
                        {puntajes.puntajeGenerala === 0 && posiblesJuegos.generala && <option value="Generala" onClick={ e => seleccionarCategoria(e) }>Generala</option>}
                        {puntajes.puntajePoker === 0 && posiblesJuegos.poker && <option value="Poker" onClick={ e => seleccionarCategoria(e) }>Poker</option>}
                        {puntajes.puntajeFull === 0 && posiblesJuegos.full && <option value="Full" onClick={ e => seleccionarCategoria(e) }>Full</option>}
                        {puntajes.puntajeEscalera === 0 && posiblesJuegos.escalera && <option value="Escalera" onClick={ e => seleccionarCategoria(e) }>Escalera</option>}
                        {puntajes.puntaje1 === 0 && <option value="juego1" onClick={ e => seleccionarCategoria(e) }>Dados 1</option>}
                        {puntajes.puntaje2 === 0 && <option value="juego2" onClick={ e => seleccionarCategoria(e) }>Dados 2</option>}
                        {puntajes.puntaje3 === 0 && <option value="juego3" onClick={ e => seleccionarCategoria(e) }>Dados 3</option>}
                        {puntajes.puntaje4 === 0 && <option value="juego4" onClick={ e => seleccionarCategoria(e) }>Dados 4</option>}
                        {puntajes.puntaje5 === 0 && <option value="juego5" onClick={ e => seleccionarCategoria(e) }>Dados 5</option>}
                        {puntajes.puntaje6 === 0 && <option value="juego6" onClick={ e => seleccionarCategoria(e) }>Dados 6</option>}
              </select>
              <button type="button" className="btn btn-primary" onClick={ aplicarPuntaje }>Aplicar puntaje</button>
          </div>
        </div>
      </div>}
      {ronda <= 9 && numeroTiro <= 2 && <div className="row justify-content-center">
        <div className="col-md-auto">
          <button type="button" className="btn btn-primary" onClick={ tirarDados }>Tirar dados</button>
        </div>
      </div>
      }
      {numeroTiro === 3 && <div className="row justify-content-center">
        <div className="col-md-auto">
          <button type="button" className="btn btn-primary" onClick={ siguienteRonda }>Siguiente ronda</button>
        </div>
      </div>
      }
      {ronda === 10 && <div className="row justify-content-center">
       <div className="col-md-auto">
          <label className="label-blanco" htmlFor="flexCheckCheckedDisabled">Juego terminado, puntaje: { puntajes.puntaje }</label>
          </div>
      </div>
      }
      <div className="row justify-content-center">
       <div className="col-md-auto">
          <button type="button" className="btn btn-secondary" onClick={ resetear }>Reset</button>
        </div>
      </div>
      <Toast visible={ toastVisible }>No hay ninguna categoría seleccionada.</Toast>
    </div>
  );
}

export default Juego
