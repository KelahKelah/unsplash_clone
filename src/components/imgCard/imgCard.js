import React, {Component} from 'react';

class ImgCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container-fluid search-bar-wrapper">
                <div className="row">
                    <img className="imgItem" src={Img} alt="img" />
                </div>
            </div>

        )
    }
}

export default ImgCard;