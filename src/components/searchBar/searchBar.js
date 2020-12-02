import React, {Component} from 'react';
import  Axios from 'axios';
import './searchBar.css';
import {BsSearch} from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            searchResult : [],
            searchIsReady : false
        }
    }

    onchange = (e) => {
        this.setState({search:e.target.value})
    }

    handleSearch = (e) => {
        e.preventDefault();
        Axios.get(`/search/photos?query=${this.state.search}`)
        .then((res) => {
            if(res.status===200) {
                this.setState({searchResult: res.data.results})
                this.props.handleData(this.state.searchResult)
                this.setState({searchIsReady: true})
            }
            })
        .catch((err) => {
            console.log(err)
        })

    }


    render() {
        return(
            <div className="field-container">
                {this.state.searchIsReady? <p>{`Search result for ${this.state.search}` }</p> : ''}
                <form onSubmit={this.handleSearch} className="field-wrapper">
                    <div className="search-icon-wrapper p-2"> 
                      <BsSearch />
                    </div>
                    <input type="text" className="searchBar" placeholder="Search for photo" onChange={this.onchange} />
                </form>

            </div>
        )
    }
}

export default SearchBar;

