import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Padrao.css'

import Header from './components/Header/Header';  
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Palavras from './components/Palavras/Palavras';
import Vantagens from './components/Vantagens/Vantagens';
import Desafios from './components/Desafios/Desafios';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Login from './components/Login/Login';
import Cadastro from './components/Cadastro/Cadastro';
import './components/Comum/Variaveis.css';

const HomePage = () => (
  <>
    <Header />
    <Home />
    <Palavras />
    <Vantagens />
    <Desafios />
    <QuemSomos />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Switch>
        <Login exact path="/" component={Login} />
        <Cadastro exact path="/Cadastro" component={Cadastro} />
        <Route   path="/HomePage"component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;