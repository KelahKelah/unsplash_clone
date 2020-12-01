import React, {Component} from 'react';
import  Axios from 'axios';
import './home.css'
import Img from '../../assets/testImg.png'
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }

    render() {
        return(
            <div>
                <div className="container-fluid search-bar-wrapper">
                    <div className="row">
                        <div className="col 12">Search bar here</div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 item">
                            <img className="imgItem" src={Img} alt="img" />
                        </div>
                        <div className="col-md-4 item">
                            <img className="imgItem" src={Img} alt="img" />
                        </div>                        
                        <div className="col-md-4 item">
                            <img className="imgItem" src={Img} alt="img" />
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;