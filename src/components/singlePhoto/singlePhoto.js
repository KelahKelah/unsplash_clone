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
        Axios.get(`/photos/${params.id}`)
        .then((res) => {
            this.setState({singlePhoto: {...res.data}})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        console.log('value of singleeee',this.state.singlePhoto)
        const {urls, user}  = this.state.singlePhoto;
        return(
            <div className="single-photo-wrapper">
                <div className="photo-flex">
                {/* <span className="close"></span> */}
                <div className="single-photo-container py-4">
                    <div>
                        <img src={urls && urls.raw} alt="single-photo" className="main-photo" />
                        <div className="single-photo-text">
                            <h5 className="photo-text-name py-1">{`${user && user.first_name} ${user && user.last_name}` }</h5>
                            <p className="mb-0 photo-location">{user && user.location}</p>
                        </div>
                        {/* center */}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SinglePhoto;