import React from 'react';
import {withRouter} from 'react-router-dom';

const Navigation = (props) => {

    const navigateToLogin = () => {
        props.history.push('/login') 
    }

    return(
        <div>
            <button className="btn btn-outline-secondary" onClick={navigateToLogin}>Login</button>
        </div>
    )
}

export default withRouter(Navigation) ;

