import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import "./home.css";
import Skeleton from "react-loading-skeleton";
import SearchBar from "../../components/searchBar/searchBar";
import {FaHeart, FaCommentDots, FaTimes} from 'react-icons/fa';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loader: false,
      pageNotFound: false,
      pageNumber: 1,
      itemPerPage: 9,
      liked: false,
    };
  }

  
  
  // GET ALL PHOTOS WITH PAGINATION 
  getAllPhotos = (pageNumber) => {
    this.setState({ loader: true });
    // ++pageNumber
    
  // CONFRIMATION FOR TOKEN BEFORE AXIOS CALL USING AXIOS INTERCEPTORS 
 //    Axios.interceptors.request.use((req) => {
 //     if(Axios.defaults.headers.common['Authorization']) {
 //         console.log('passed security check')
 //     }
 // })

   Axios.get(`/photos?page=${pageNumber}&per_page=${this.state.itemPerPage}`)
     .then((res) => {
       this.setState({ data: res.data});
       this.setState({ loader: false });
     })
     .catch((error) => {
       if({Errors: "Request failed with status code 404"}) {
         // LOADER IS STOPED WHEN PAGE IS NOT FOUND 
         this.setState({loader:false})
         this.setState({pageNotFound:true})
       } else {
       }
     });
  }

  componentDidMount() {
    this.getAllPhotos(this.state.pageNumber);
  }
  
  // HANDLES CLICK OF IMAGES TO LOAD A SINGLE IMAGE 
  handlePhotoClick = (id) => {
    this.props.history.push(`/photos/${id}`);
  };

  // FUNCTION TOGGLES GET ALL PHOTOS STATE WITH RESPONSE FROM 
  handleData = (res) => {
    // SETS STATE TO AN EMPTY STRING BEFORE RERENDERING 
    this.setState({data: {}})
    this.setState({ data: res });
  };

  // HANDLES PICTURE LIKES 
  handlePhotoLikes = () => {
    this.setState({liked: true})
  }

  // HANDLES PICTURE COMMENT 
  handleComment = () => {
    // axios.post()
  }
  // HANDLES PICTURE DELETE 
  handlePhotoDelete = (id) => {
    // Axios.delete(`/photos/${id}`)
    // .then((res) => {
    // })
    // .catch((err) => {
    // })
    const filterResult = this.state.data.filter((element, index) => {
      return element.id !== id
    });
    // SETS STATE TO AN EMPTY ARRAY BEFORE DELETING 
    this.setState({data: {}})
    this.setState({data:filterResult}) 
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="container search-bar-wrapper">
          <div className="">
            <SearchBar data={this.state.data} handleData={this.handleData} />
          </div>
        </div>
        {
          // STATEMENT CHECKS IF LAODER IS TRUE 
        this.state.loader ? 
        (
          <div>
            <Skeleton 
                className="space" 
                height="45vh" 
                width="15vw"
                count={4} 
            />
          </div>
        ) 
        // STATEMENT CHECKS IF LOADER IS NOT FOUND     
        : this.state.pageNotFound ? 
        (<h4>Opps! Page not Found </h4>) 
        : (
          <div className="img-list-wrapper ">
            <div className="img-list-container">
              {this.state.data.length > 0 &&
                this.state.data.map((item, ind) => {
                  return (
                    <div className="item mt-5" key={ind}>
                      <img
                        className="imgItem mx-2 mt-5"
                        src={
                          item.urls.full || item.urls.regular || item.url.raw
                        }
                        alt="img"
                        onClick={() => {
                          this.handlePhotoClick(item.id);
                        }}
                      />
                      <p className="name-text">{`${item.user.first_name} ${item.user.last_name}`}</p>

                      <div className="d-flex action-wrapper mb-4">
                        <div className="icon-wrapper">
                          <FaTimes className="action-icon" onClick={()=>{this.handlePhotoDelete(item.id)}} />
                        </div>
                        <div className="icon-wrapper">
                          <FaCommentDots className="action-icon" />
                        </div>
                        <div className="icon-wrapper" onClick={this.handlePhotoLikes} >
                          {this.state.liked? <FaHeart className="after-action-icon" /> : <FaHeart className="action-icon" /> }
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )
        }

        {/* PAGINATION */}
        <div className="my-5">
        <button type="button" className="btn btn-default pagination-button" onClick={()=>{this.getAllPhotos(this.state.pageNumber)}} >Prev</button>

          {/* <button type="button" className="btn btn-default pagination-button" onClick={()=>{this.getAllPhotos(this.state.pageNumber)}} >{this.state.pageNumber === 1 ? <p className="yellow">Prev</p> : this.state.pageNumber > 1? <p className="white">Prev</p> : null}</button> */}
          {/* <button type="button" className="btn btn-default pagination-button" onClick={()=>{this.getAllPhotos(++this.state.pageNumber)}} >{this.state.pageNumber}</button> */}
          <button type="button" className="btn btn-default pagination-button" onClick={()=>{this.getAllPhotos(this.state.pageNumber+1)}} >Next</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);

