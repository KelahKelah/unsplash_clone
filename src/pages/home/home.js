import React, {Component} from 'react';
import  Axios from 'axios';
import './home.css';
import Img from '../../assets/testImg.png';
import SearchBar from '../../components/searchBar/searchBar';


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        data: {}
        };
    }
    componentDidMount() {
        Axios.get('/photos')
        .then((res) => {
            console.log('res',res.data)
            this.setState({data:res.data})
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
                    <div className="">
                        <SearchBar data={this.state.data} />
                    </div>
                </div>

                <div className="img-list-wrapper ">
                    <div className="img-list-container">{this.state.data.length > 0 && this.state.data.map((item, ind) => {
                        return(
                            <div className="item" key={ind}>
                                <img className="imgItem" src={item.urls.full || item.urls.regular || item.url.raw} alt="img" />
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;