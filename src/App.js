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
// import Login from './components/Login/Login';
// import Cadastro from './components/Cadastro/Cadastro';

const HomePage = () => (
  <>
    <Home />
    <Palavras />
    <Vantagens />
    <Desafios />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
        {/* <Route path="/Login" component={Login} />
        <Route path="/Cadastro" component={Cadastro} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;