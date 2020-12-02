import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import  Axios from 'axios';
import './home.css';
import Skeleton from 'react-loading-skeleton';
import SearchBar from '../../components/searchBar/searchBar';


class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        data: {},
        loader: false
        };
    }
    componentDidMount() {
        this.setState({loader: true})
        Axios.get('/photos')
        .then((res) => {
            this.setState({data:res.data.slice(0,9)})
            this.setState({loader: false})
        })
        .catch((errors) => {
            console.log('erroooor', errors)
        })


    }
    handlePhotoClick = (id) => {
        this.props.history.push(`/photos/${id}`)
    }

    handleData = (res) => {
        this.setState({data: res})
    }

    render() {
        return(
            <div className="home-wrapper"> 
                <div className="container search-bar-wrapper">
                    <div className="">
                        <SearchBar data={this.state.data} handleData={this.handleData} />
                    </div>
                </div>
                {
                this.state.loader? <div><Skeleton className="space" height="35vh" width="19vw" /><Skeleton className="space" height="35vh" width="19vw" margin="2rem" /><Skeleton className="space" height="35vh" width="19vw" margin="2rem" /></div> : 
                 <div className="img-list-wrapper ">
                    <div className="img-list-container">{this.state.data.length > 0 && this.state.data.map((item, ind) => {
                        return(
                            <div className="item" key={ind}>
                                <img className="imgItem mx-2 my-2" src={item.urls.full || item.urls.regular || item.url.raw} alt="img" onClick={()=>{this.handlePhotoClick(item.id)}} />
                                <p className="name-text">{`${item.user.first_name} ${item.user.last_name}`}</p>
                            </div>
                        )
                    })}
                    </div>
                </div>
                }
                             
            </div>
        )
    }
}

export default withRouter(Home);