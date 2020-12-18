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
        //     console.log('if block')
        //     this.setState({searchString: ''})
        // }
        // console.log('event trace',event.keyCode,event.charCode,event.which)
    }

    // handleKeyPress = (e) => {
    //     window.addEventListener()
    //     if(e.code == 'Backspace') {
    //         console.log('found it')
    //     }
    //     // if(e.code == 'Enter') {
    //     //     console.log('enter')
    //     // }
    //     console.log('key code event:',e,e.which, e.charCode, e.keyCode,'key:', e.key)
    // }

    handleSearch = (e) => {
        e.preventDefault();
        // VALIDATION FOR SCRIPT INJECTIONS 
        if(this.state.searchString.indexOf('/') || this.state.searchString.indexof('@') || this.state.searchString.indexOf('|')) {
            console.log('search word must be alphabet')
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
                console.trace('search result value',this.state.searchResult)
                // OVER RIDDING STATE WITH SEARCH RESULT 
                this.props.handleData(this.state.searchResult)
                //
                this.setState({searchIsReady: true})
            } 
            })
        .catch((err) => {
            console.log(err)
        })

        console.log('value of e',e)
        // TO REFREASH SEARCH NOTIFICATION 
       
        //
    }


    render() {
        return(
            <div className="field-container">
                {this.state.searchIsReady? <p className="search-notification">{`Search result for ${this.state.searchString}` }</p> : ''}
                <form onSubmit={this.handleSearch} className="field-wrapper">
                    <div className="search-icon-wrapper p-2"> 
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

