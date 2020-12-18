import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import "./home.css";
import Skeleton from "react-loading-skeleton";
import SearchBar from "../../components/searchBar/searchBar";
import {loaderCount} from './data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loader: false,
      pageNotFound: false
    };
  }
  componentDidMount() {
    this.setState({ loader: true });
    
     // CONFRIMATION FOR TOKEN BEFORE AXIOS CALL USING AXIOS INTERCEPTORS 
  //    Axios.interceptors.request.use((req) => {
  //     if(Axios.defaults.headers.common['Authorization']) {
  //         console.log('passed security check')
  //     }
  // })
    Axios.get("/photos")
      .then((res) => {
        this.setState({ data: res.data.slice(0, 9) });
        this.setState({ loader: false });
        console.log(res.data)
      })
      .catch((error) => {
        if({Errors: "Request failed with status code 404"}) {
          // LOADER IS STOPED WHEN PAGE IS NOT FOUND 
          this.setState({loader:false})
          this.setState({pageNotFound:true})
        } else {
          console.log('catch else block')
        }
        console.log("erroooor", error);
      });
  }

  handlePhotoClick = (id) => {
    this.props.history.push(`/photos/${id}`);
  };
  // FUNCTION TOGGLES GET PHOTOS STATE WITH ANY ARGUMENT PASSED  
  handleData = (res) => {
    console.trace(res)
    // SETS STATE TO AN EMPTY STRING BEFORE RERENDERING 
    this.setState({data: {}})
    //
    this.setState({ data: res });
  };

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
                width="17vw"
                count={4} 
            />
          </div>
        )     
        : this.state.pageNotFound ? (<h4>Opps! Page not Found </h4>) : (
          <div className="img-list-wrapper ">
            <div className="img-list-container">
              {this.state.data.length > 0 &&
                this.state.data.map((item, ind) => {
                  return (
                    <div className="item" key={ind}>
                      <img
                        className="imgItem mx-2 my-2"
                        src={
                          item.urls.full || item.urls.regular || item.url.raw
                        }
                        alt="img"
                        onClick={() => {
                          this.handlePhotoClick(item.id);
                        }}
                      />
                      <p className="name-text">{`${item.user.first_name} ${item.user.last_name}`}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default withRouter(Home);

// loader? <Loader/> : (map) ? <div></div> : notFound 


  // loaderCount.map((item,ind) => {
      //   return(
      //     <div>
      //           <div className="custom-skeleton-wrapper">
      //             {item}
      //           </div>
      //         </div>
      //   )
      // })