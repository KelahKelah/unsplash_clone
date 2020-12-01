import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SinglePhoto from './components/singlePhoto/singlePhoto';
import Home from './pages/home/home';

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/photos/:id" component={SinglePhoto} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;