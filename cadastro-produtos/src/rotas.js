import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import CadastroProduto from './views/produtos/cadastro';
import Home from './views/home';

export default () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}