import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './InicioSesion';
import Register from './Registro';
import Inicio from './App';
import Principal from './Inicio'
import React from 'react';

function Routes(){

    return(
        <Router>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/login"  component={Login}/>
                <Route path="/register"  component={Register}/>
                <Route path="/principal" component={Principal}/>
                <Route component={Inicio} />
            </Switch>
        </Router>
    );
}

export default Routes;