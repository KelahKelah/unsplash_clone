import React, {Component} from 'react';
import  Axios from 'axios';
import Img from '../../assets/testImg.png';

class SinglePhoto extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="single-img-wrapper">
                {/* <span className="close"></span> */}
                <div className="single-img-container">
                    <img src={Img} alt="single-img" />
                    <div className="single-img-text">
                        <h5 className="img-text-name">Fedrick Apata</h5>
                        <p className="img-location">Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePhoto;