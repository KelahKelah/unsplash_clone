import React, {Component} from 'react';
import  Axios from 'axios';
import './home.css';
import Img from '../../assets/testImg.png';
import SearchBar from '../../components/searchBar/searchBar';


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        Axios.get('/photos')
        .then((res) => {
            console.log('responseee', res)
        })
        .catch((errors) => {
            console.log('erroooor', errors)
        })
        // this.setState({data:})
    }

    render() {
        return(
            <div className="home-wrapper"> 
                <div className="container search-bar-wrapper">
                    <div className="row">
                        <div className="col 12">
                            <SearchBar/>
                        </div>
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