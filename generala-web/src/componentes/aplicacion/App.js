import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Bienvenida from '../paginas/Bienvenida.js'
import Juego from '../paginas/Juego.js'
import './estilos/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Bienvenida } />
        <Route exact path="/juego" component={ Juego } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
