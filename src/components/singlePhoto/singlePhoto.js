import React, {Component} from 'react';
import  Axios from 'axios';
import './singlePhoto.css';
import Skeleton from 'react-loading-skeleton';
Axios.defaults.timeout = 5000;



class SinglePhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singlePhoto: {},
            loader: false,
            pageNotFound: false
        }
    }

    componentDidMount() {
        // const { match: { params } } = this.props;
        const { params } = this.props.match;
     
        // SETTING LOADER FOR API CALL
            this.setState({loader:true})

        // ASK JOSH ABOUT SET TIME OUT 
        // setTimeout=()=> {
        //     this.setState({loader:true})

        // , (2000)}

        // CONFRIMATION FOR TOKEN BEFORE AXIOS CALL USING AXIOS INTERCEPTORS 
        // Axios.interceptors.request.use((req) => {
        //     if(Axios.defaults.headers.common['Authorization']) {
        //         console.log('req val',req)
        //         console.log('passed security check')
        //     }
        // })
        Axios.interceptors.request.use(req => {
            console.log(`${req.method} ${req.url}`);
            // Important: request interceptors **must** return the request.
            return req;
          });

  
        Axios.get(`/photos/${params.id}`)
        .then((res) => {
            this.setState({singlePhoto: {...res.data}})
            this.setState({loader: false})
        }).catch((err) => {
            if(err) {
                // Axios.interceptors.
                this.setState({loader: false})
                this.setState({pageNotFound: true})
            }
        })
    }
    render() {
        // OBJECT DISTRUCTURING TO ACCESS SINGLE PHOTO 
        const {urls, user}  = this.state.singlePhoto;
        return this.state.loader? (<Skeleton className="single-photo-wrapper-loader" width="50vw" height="50vh" />) 
        : this.state.pageNotFound? (<p>Something went wrong</p>) : (
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