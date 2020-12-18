import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SinglePhoto from './components/singlePhoto/singlePhoto';
import Home from './pages/home/home';
import SearchBar from '../src/components/searchBar/searchBar';
import Login from '../src/pages/login/login'

const Routes = () => {
    return(
        <div>
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/photos/:id" component={SinglePhoto} />
                {/* POINTING /search to HOME COMPONENT BECUASE SEARCH OVERRIDES HOME  */}
                <Route path="/search" component={Home} />
                {/* //  */}
                <Route path="/login" component={Login} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;