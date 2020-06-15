import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from '../src/components/auth/Login';
import NuevaCuenta from '../src/components/auth/NuevaCuenta';
import Proyectos from '../src/components/proyectos/Proyectos';
import ProyectoState from './context/proyectos/proyectoState';


function App() {
  return (
    <ProyectoState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/nueva-cuenta" component={NuevaCuenta}></Route>
          <Route exact path="/proyectos" component={Proyectos}></Route>
        </Switch>
    </Router>
    </ProyectoState>
  );
}

export default App;
