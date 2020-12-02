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
            searchResult : []
        }
    }

    onchange = (e) => {
        this.setState({search:e.target.value})
        console.log(this.state.search)
    }

    handleSearch = (e) => {
        e.preventDefault();
        console.log('search input',this.state.search)
        Axios.get(`/search/photos?query=${this.state.search}`)
        .then((res) => {
            if(res.status===200) {
                this.setState({searchResult: res.data.results})
                console.log('resullltt',this.state.searchResult)
                this.props.handleData(this.state.searchResult)
            }
            console.log('crazzzzzzzzzzy',res)})
        .catch((err) => {
            console.log(err)
        })

    }


    render() {
        console.log('new search value',()=> {this.props.handleData(this.state.searchResult)})

        return(
            <div>
                <form onSubmit={this.handleSearch}>
                    <BsSearch />
                    <input type="text" className="searchBar" placeholder="Search for photo" onChange={this.onchange} />
                </form>

                
            </div>
        )
    }
}

export default SearchBar;

   // this.props.data.filter((item,ind) => {
        //     if(this.state.search !== '' && this.state.search == item.user.first_name) {
        //         return item.user.first_name
        //     } else {
        //         console.log('222222222222',item)
        //     }

        // })