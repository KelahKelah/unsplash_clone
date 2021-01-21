import React, {Component} from 'react';
import  Axios from 'axios';
import './searchBar.css';
import {BsSearch} from 'react-icons/bs';
import {withRouter} from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: '',
            searchResult : [],
            validation: false,
            searchIsReady : false
        }
    }

    onchange = (event) => {
        this.setState({searchString:event.target.value})
        // if(this.state.searchString.length === 0 ) {
        //     this.setState({searchString: ''})
        // }
    }

    // handleKeyPress = (e) => {
    //     window.addEventListener()
    //     if(e.code == 'Backspace') {
    //     }
    //     // if(e.code == 'Enter') {
    //     // }
    // }

    handleSearch = (e) => {
        e.preventDefault();
        
        // VALIDATION FOR SCRIPT INJECTIONS 
        if(this.state.searchString.indexOf('/') || this.state.searchString.indexof('@') || this.state.searchString.indexOf('|')) {
            this.setState({validation:false})
        } else if(this.state.searchString.indexOf('/')=== -1 || this.state.searchString.indexof('@')=== -1 || this.state.searchString.indexOf('|')=== -1) {
            alert('No scripts injected')
            this.setState({validation:false})
        } else {
            console.log('else is not working')
        }
        //
        
        this.props.history.push('/search');
        Axios.get(`/search/photos?query=${this.state.searchString}`)
        .then((res) => {
            if(res.status===200) {
                 this.setState({searchResult: res.data.results});
                // OVER RIDDING STATE WITH SEARCH RESULT 
                this.props.handleData(this.state.searchResult)
                //
                this.setState({searchIsReady: true})
            } 
            })
        .catch((err) => {
            console.log(err)
        })

        // TO REFREASH SEARCH NOTIFICATION 
       
        //
    }


    render() {
        return(
            <div className="field-container">
                {this.state.searchIsReady? <p className="search-result-notification landing-animation">{`Search result for ${this.state.searchString}` }</p> : ''}
                <form onSubmit={this.handleSearch} className="field-wrapper">
                    <div className="search-icon-wrapper pl-3"> 
                      <BsSearch />
                    </div>

                    <input type="text" className="searchBar" placeholder="Search for photo" onChange={this.onchange} />
                    {/* <input type="text" className="searchBar" placeholder="key" onKeyPress={this.handleKeyPress} /> */}
                   
                </form>
            </div>
        )
    }
}

export default withRouter(SearchBar);

