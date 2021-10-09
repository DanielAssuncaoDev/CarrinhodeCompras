import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home/index'
import InfoProduto from './pages/descProduto/index'
import Carrinho from './pages/carrinho/index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/infoproduto" exact={true} component={InfoProduto} />
        <Route path="/carrinho" exact={true} component={Carrinho} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
