import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home/home';

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;