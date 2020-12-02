import React, {Component} from 'react';
import  Axios from 'axios';
import './singlePhoto.css';
import Skeleton from 'react-loading-skeleton';


class SinglePhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singlePhoto: {}
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log('params isssss', params)

        Axios.get(`/photos/${params.id}`)
        .then((res) => {
            console.log(typeof res.data)
            console.log('singlePhotores', res.data)
            this.setState({singlePhoto: {...res.data}})
            console.log('value od singuuuuuuuu',this.state.singlePhoto)
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        console.log('value of singleeee',this.state.singlePhoto)
        const {urls, user}  = this.state.singlePhoto;
        return(
            <div className="single-photo-wrapper">
                {/* <span className="close"></span> */}
                <div className="single-photo-container">
                    <img src={urls && urls.raw} alt="single-photo" className="main-photo" />
                    <div className="single-photo-text">
                        <h5 className="photo-text-name">{user && user.first_name}</h5>
                        <p className="photo-location">{user && user.location}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePhoto;